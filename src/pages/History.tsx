import { Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import HistoryTable from "../components/history/HistoryTable";
import Layout from "../components/navigation/Layout";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { HEADING_SIZE } from "../lib/constants";
import { HistoryResponse } from "../lib/types";

const HISTORY_URL = "history";

function History() {
  const [history, setHistory] = useState<HistoryResponse>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const axios = useAxiosPrivate();

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
      try {
        const response = await axios.get<HistoryResponse>(HISTORY_URL);
        setHistory(response.data);
        setErrorMessage(undefined);
      } catch (error: any) {
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
      <Heading as="h1" fontSize={HEADING_SIZE} marginBottom={4}>
        Search history
      </Heading>
      {renderContent()}
    </Layout>
  );
}

export default History;
