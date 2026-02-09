import AdminStore from "../store/adminStore";
import TelecallerStore from "../store/telecallerStore";
import AdminRoute from "./adminroute";
import TelecallerRoute from "./telecallerroute";
import { Provider } from "react-redux"

const AppRoute = () => {
    const isAdmin = true;

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
}

export default AppRoute