import { createBrowserRouter } from "react-router-dom";
import { login, register } from "./auth";
import { dashboard } from "./dashboard";
import { main } from "./main";

const router = createBrowserRouter([
    main,
    dashboard,
    login,
    register
]);

export default router;