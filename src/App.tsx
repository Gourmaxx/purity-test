import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { Hub } from "./screens/Hub";
import { Quiz } from "./screens/Quiz";
import { CategoryResult } from "./screens/CategoryResult";
import { GlobalResult } from "./screens/GlobalResult";
import { SharedResult } from "./screens/SharedResult";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hub" element={<Hub />} />
      <Route path="/test/:categoryId" element={<Quiz />} />
      <Route path="/resultat/:categoryId" element={<CategoryResult />} />
      <Route path="/resultat" element={<GlobalResult />} />
      <Route path="/partage" element={<SharedResult />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
