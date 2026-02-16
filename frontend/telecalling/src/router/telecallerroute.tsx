import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LeadsCallerPage from "../pages/telecaller/LeadsCallerPage";
import FilteredLeads from "../pages/telecaller/FilteredLeads";
import AdmissionsForm from "../features/Admissions/AdmissionsForm";

const TelecallerRoute = () => (
    <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<LeadsCallerPage/>}/>
            <Route path="/leadlist/:status" element={<FilteredLeads/>}/>
            <Route path="/admit" element={<AdmissionsForm/>}/>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
    </Routes>
)

export default TelecallerRoute