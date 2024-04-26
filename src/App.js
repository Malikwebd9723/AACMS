import { Route, Routes } from "react-router-dom"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Menu from "./components/dashboard/Menu";
import ClientManagement from "./components/dashboard/ClientManagement"
function App() {
  return (
      <>
      <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/admin" element={<Menu />} >
        <Route exact path="clientManagement" element={<ClientManagement/>}/>
      </Route>
      </Routes>
      </>
  );
}

export default App;
