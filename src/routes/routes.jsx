import { BrowserRouter, Route, Routes } from "react-router";
import Detail from "../features/detail/detail";
import HomePage from "../features/home/homepage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/comic/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
