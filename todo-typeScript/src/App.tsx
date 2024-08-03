import { Route, Routes } from "react-router-dom";
import { TodoDetails } from "./pages/todoDetails";
import { TodoPage } from "./pages/todoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="list" element={<TodoPage />} />
        <Route path=":todoId" element={<TodoDetails />} />
      </Routes>
    </>
  );
}

export default App;
