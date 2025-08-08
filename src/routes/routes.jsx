import { BrowserRouter, Route, Routes } from "react-router";
import Detail from "../features/detail/detail";
import HomePage from "../features/home/homepage";
import DefaultLayout from "../layouts";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/comic/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
