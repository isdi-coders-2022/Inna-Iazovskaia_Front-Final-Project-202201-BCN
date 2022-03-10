import { Route, Routes } from "react-router-dom";
import MessagesPage from "./pages/MessagesPage/MessagesPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/">
          <Route index element={<MessagesPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
