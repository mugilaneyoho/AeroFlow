import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LeadsCallerPage from "../pages/telecaller/LeadsCallerPage";
import FilteredLeads from "../pages/telecaller/FilteredLeads";

const TelecallerRoute = () => (
    <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<LeadsCallerPage/>}/>
            <Route path="/leadlist" element={<FilteredLeads/>}/>
        </Route>
    </Routes>
)

export default TelecallerRoute