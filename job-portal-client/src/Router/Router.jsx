import {
    createBrowserRouter
  } from "react-router-dom";
  import App from "../App";
  import Home from "../Pages/Home";
import About from "../Pages/About";
import Postjob from "../Pages/Postjob";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {path: "/",element: <Home/>},
        {path: "/postjob",element: <Postjob/>}
      ],
    },
  ]);

  export default router;