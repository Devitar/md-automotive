import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import { HomePage } from "./views";
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./theme"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* TODO: Additional routes */}

        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
