import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import ToolDetail from "./pages/ToolDetail";
import Prompts from "./pages/Prompts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "tools", element: <Tools /> },
      { path: "tools/:toolId", element: <ToolDetail /> },
      { path: "prompts", element: <Prompts /> },
    ],
  },
]);

export default router;
