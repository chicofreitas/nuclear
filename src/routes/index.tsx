import { createBrowserRouter } from "react-router-dom";
import { dashboard } from "./dashboard";
import { main } from "./main";

const router = createBrowserRouter([
    main,
    dashboard
]);

export default router;