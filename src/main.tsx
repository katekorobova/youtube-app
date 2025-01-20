import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import theme from "./theme";
import { QueryDraftProvider } from "./context/QueryDraftProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <QueryDraftProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </BrowserRouter>
        </QueryDraftProvider>
      </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>
);
