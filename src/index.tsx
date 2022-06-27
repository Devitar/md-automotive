import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import { HomePage } from "./views";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* TODO: Additional routes */}

      <Route path="*" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);
