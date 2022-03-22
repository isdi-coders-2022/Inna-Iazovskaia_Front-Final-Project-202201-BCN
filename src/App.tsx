import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import MessageDetailsPage from "./pages/MessageDetailsPage/MessageDetailsPage";
import MessagesPage from "./pages/MessagesPage/MessagesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import UpdateMessagePage from "./pages/UpdateMessagePage/UpdateMessagePage";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<NotFoundPage />} />
          <Route path="/profile" element={<NotFoundPage />} />
          <Route path="/conversations" element={<MessagesPage />} />
          <Route path="/register-page" element={<NotFoundPage />} />
          <Route path="/update-message/:id" element={<UpdateMessagePage />} />
          <Route path="/message/:id" element={<MessageDetailsPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
