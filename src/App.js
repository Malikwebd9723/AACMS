import { Route, Routes } from "react-router-dom"
import { States } from "./context/States";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Menu from "./components/dashboard/Menu";
import ClientManagement from "./components/dashboard/ClientManagement"
import AdminDashboard from "./components/dashboard/AdminDashboard"
import JudgesDatails from "./components/dashboard/JugesDetails";
import HearingDates from "./components/dashboard/HearingDates";
import CasesDetails from "./components/dashboard/CasesDetails";
import Finance from "./components/dashboard/Finance";
import Settings from "./components/dashboard/Settings";
import Profile from "./components/dashboard/Profile";
function App() {
  return (
    <>
      <States>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/admin" element={<Menu />} >
            <Route exact path="" element={<AdminDashboard />} />
            <Route exact path="clientManagement" element={<ClientManagement />} />
            <Route exact path="judgesDetails" element={<JudgesDatails />} />
            <Route exact path="hearingDates" element={<HearingDates />} />
            <Route exact path="casesDetails" element={<CasesDetails />} />
            <Route exact path="finance" element={<Finance />} />
            <Route exact path="settings" element={<Settings />} />
            <Route exact path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </States>
    </>
  );
}

export default App;
