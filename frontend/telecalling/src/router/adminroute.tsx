import { Navigate, Route, Routes } from "react-router-dom";
import DashBoard from "../pages/admin/DashBoard";
import LeadsAllocation from "../pages/admin/LeadsAllocation";
import RegisterFees from "../pages/admin/RegisterFees";
import Telecaller from "../pages/admin/Telecallers";
import MainLayout from "../layout/MainLayout";
import TicketManagement from "../pages/tickets/TicketManagement";

const AdminRoute = () => (
    <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<DashBoard/>}/>
            <Route path="/leads" element={<LeadsAllocation/>}/>
            <Route path="/registerfee" element={<RegisterFees/>}/>
            <Route path="/telecallers" element={<Telecaller/>}/>
            <Route path="/ticket" element={<TicketManagement/>}/>
            <Route path="*" element={<Navigate to='/' replace/>}/>
        </Route>
    </Routes>
)

export default AdminRoute