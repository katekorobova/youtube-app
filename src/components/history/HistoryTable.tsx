import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import useQueryDraft from "../../hooks/useQueryDraft";
import {
  DEFAULT_CATEGORY,
  DEFAULT_LOCATION,
  DEFAULT_ORDER,
  HOME_PAGE,
  LOCATIONS,
  DATE_FORMAT,
  SORT_ORDERS,
  VIDEO_CATEGORIES,
  DATE_TIME_FORMAT,
} from "../../lib/constants";
import { HistoryResponse } from "../../lib/types";

const EMPTY_STRING = "-";

interface Props {
  history?: HistoryResponse;
}

const HistoryTable = ({ history }: Props) => {
  const { setQueryDraft } = useQueryDraft();
  const navigate = useNavigate();

  if (!history?.items?.length) {
    return <Text>You haven't performed any searches yet.</Text>;
  }

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Search Text</Th>
            <Th>From</Th>
            <Th>To</Th>
            <Th>Category</Th>
            <Th>Location</Th>
            <Th>Sorted By</Th>
            <Th>Repeat</Th>
          </Tr>
        </Thead>
        <Tbody>
          {history.items.map(({ id, date, query }) => {
            const category = VIDEO_CATEGORIES.find(
              (entry) => entry.value === query.category
            );
            const order = SORT_ORDERS.find(
              (entry) => entry.value === query.order
            );
            const location = LOCATIONS.find(
              (entry) => entry.value === query.locationData
            );

            return (
              <Tr key={id}>
                <Td>{moment(date).format(DATE_TIME_FORMAT)}</Td>
                <Td>{query.q ?? EMPTY_STRING}</Td>
                <Td>
                  {query.publishedAfter
                    ? moment(query.publishedAfter).format(DATE_FORMAT)
                    : EMPTY_STRING}
                </Td>
                <Td>
                  {query.publishedBefore
                    ? moment(query.publishedBefore).format(DATE_FORMAT)
                    : EMPTY_STRING}
                </Td>
                <Td>{category?.label ?? DEFAULT_CATEGORY}</Td>
                <Td>{location?.label ?? DEFAULT_LOCATION}</Td>
                <Td>{order?.label ?? DEFAULT_ORDER}</Td>
                <Td>
                  <Button
                    onClick={() => {
                      setQueryDraft(query);
                      navigate(HOME_PAGE);
                    }}
                  >
                    Repeat
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default HistoryTable;
