import { Route, Routes } from "react-router-dom"
import Login from "./components/Login";

function App() {
  return (
      <>
      <Routes>
      <Route exact path="/" element={<Login />} />
      </Routes>
      </>
  );
}

export default App;
