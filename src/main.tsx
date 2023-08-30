import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from "./theme.tsx";
import ToasterProvider from "./provider/ToasterProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <ToasterProvider />
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
