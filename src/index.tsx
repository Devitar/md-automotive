import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { ThemeProvider } from "styled-components";
import "./index.css";
import { defaultTheme } from "./theme";
import { HomePage } from "./views";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
