import { createContext, ReactNode, useState } from "react";
import { VideoQuery } from "../lib/types";

interface QueryDraftContextProps {
  queryDraft: VideoQuery;
  setQueryDraft: (draft: VideoQuery) => void;
}

export const queryDraftContext = createContext<QueryDraftContextProps>(
  {} as QueryDraftContextProps
);

interface Props {
  children: ReactNode;
}

export const QueryDraftProvider = ({ children }: Props) => {
  const [queryDraft, setQueryDraft] = useState({} as VideoQuery);

  return (
    <queryDraftContext.Provider value={{ queryDraft, setQueryDraft }}>
      {children}
    </queryDraftContext.Provider>
  );
};
