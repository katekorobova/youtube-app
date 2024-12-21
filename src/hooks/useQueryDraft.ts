import { useContext } from "react";
import { queryDraftContext } from "../context/QueryDraftProvider";

const useQueryDraft = () => {
  return useContext(queryDraftContext);
};

export default useQueryDraft;
