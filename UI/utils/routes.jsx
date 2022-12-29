import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../src/App";
import Error from "../src/pages/Error/Error";
import Home from "../src/pages/Home";
import SignIn from "../src/pages/SignIn";
import Video from "../src/pages/Video";

const router = createBrowserRouter([
  {
    /**
     * INFO: How to use Outlet and nested routes ?
     * If a component is parent, and involves children,
     * You should go to that component and create an <Outlet/> tag to render child
     */

    path: "/", //INFO: The root route.
    element: <App />,
    errorElement: <Error />, //INFO: HOW TO IMPLEMENT ERROR PAGES!
    children: [
      //INFO: How to declare NESTED ROUET in REACT!
      {
        path:"/",
        element: <Home />, //INFO: Home component will be the default display in the 
      },
      {
        path: "video/:id",
        element: <Video />,
        errorElement:<Error/>,
      }, 
      {
        path:"signin",
        element: <SignIn/>,
        errorElement: <Error/>
      }
    ],
  },
]);

export default router;
