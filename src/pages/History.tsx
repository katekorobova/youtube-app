import { Text } from "@chakra-ui/react";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import Layout from "../components/common/Layout";
import PageTitle from "../components/common/PageTitle";
import HistoryTable from "../components/history/HistoryTable";
import useAxiosAuthorized from "../hooks/useAxiosAuthorized";
import { HISTORY_URL } from "../lib/constants";
import { HistoryResponse } from "../lib/types";

function History() {
  const [history, setHistory] = useState<HistoryResponse>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const axiosAuthorized = useAxiosAuthorized();

  const renderContent = () => {
    if (isLoading) {
      return <Text>Loading...</Text>;
    } else if (errorMessage) {
      return <Text>{errorMessage}</Text>;
    } else {
      return <HistoryTable history={history} />;
    }
  };

  useEffect(() => {
    const fetchHistory = async () => {
      const controller = new AbortController();
      try {
        const response = await axiosAuthorized.get<HistoryResponse>(
          HISTORY_URL,
          {
            signal: controller.signal,
          }
        );
        setHistory(response.data);
        setErrorMessage(undefined);
      } catch (error: any) {
        if (error instanceof CanceledError) return;
        setErrorMessage(error?.message);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHistory();
  }, []);

  return (
    <Layout>
      <PageTitle>Search history</PageTitle>
      {renderContent()}
    </Layout>
  );
}

export default History;
