import { createBrowserRouter } from "react-router-dom";
import { login, recover, register } from "./auth";
import { dashboard } from "./dashboard";
import { main } from "./main";

const router = createBrowserRouter([
    main,
    dashboard,
    login,
    register,
    recover
]);

export default router;