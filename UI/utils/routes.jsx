import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../src/App";
import Error from "../src/pages/Error/Error";
import Home from "../src/pages/Home";
import Video from "../src/pages/Video";

const router = createBrowserRouter([
  {
    path: "/", //INFO: The root route.
    element: <App />,
    errorElement: <Error />, //INFO: HOW TO IMPLEMENT ERROR PAGES!
    children: [
      //INFO: How to declare NESTED ROUET in REACT!
      {
        index:true,
        element: <Home />, //INFO: Home component will be the default display in the 
      },
      {
        path: "video/:id",
        element: <Video />,
        errorElement:<Error/>,
      },
    ],
  },
]);

export default router;
