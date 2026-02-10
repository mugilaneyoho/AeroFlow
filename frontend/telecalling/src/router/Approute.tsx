import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../contexts/AuthUseContext";
import AdminStore from "../store/adminStore";
import TelecallerStore from "../store/telecallerStore";
import AdminRoute from "./adminroute";
import TelecallerRoute from "./telecallerroute";
import { Provider } from "react-redux"
import LoginPage from "../pages/common/LoginPage";

const AppRoute = () => {
    const {isAuthenticated,isAdmin} = useAuth()

    if (!isAuthenticated) {   
        return isAdmin ?
        <>
            <Provider store={AdminStore}>
                <AdminRoute />
            </Provider>
        </>
        :
        <>
            <Provider store={TelecallerStore}>
                <TelecallerRoute />
            </Provider>
        </>
    }else{
        return <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    }
}

export default AppRoute