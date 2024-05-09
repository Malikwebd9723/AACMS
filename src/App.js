import { Route, Routes } from "react-router-dom"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Menu from "./components/dashboard/Menu";
import ClientManagement from "./components/dashboard/ClientManagement"
import AdminDashboard from "./components/dashboard/AdminDashboard"
import JudgesDatails from "./components/dashboard/JugesDetails";
import HearingDates from "./components/dashboard/HearingDates";
function App() {
  return (
      <>
      <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/admin" element={<Menu />} >
      <Route exact path="" element={<AdminDashboard/>}/>
        <Route exact path="clientManagement" element={<ClientManagement/>}/>
        <Route exact path="judgesDetails" element={<JudgesDatails/>}/>
        <Route exact path="hearingDates" element={<HearingDates/>}/>
      </Route>
      </Routes>
      </>
  );
}

export default App;
