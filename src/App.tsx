import { Route, Routes } from "react-router-dom";
import MessagesPage from "./pages/MessagesPage/MessagesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MessagesPage />} />
        <Route path="/home" element={<NotFoundPage />} />
        <Route path="/profile" element={<NotFoundPage />} />
        <Route path="/conversations" element={<MessagesPage />} />
      </Routes>
    </main>
  );
}

export default App;
