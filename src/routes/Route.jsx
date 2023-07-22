import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Homepage from "../pages/Home/Homepage";
import Colleges from "../pages/Colleges/Colleges";
import MyCollege from "../pages/MyCollege/MyCollege";
import Admission from "../pages/Admission/Admission";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "/myColleges",
        element: <MyCollege></MyCollege>,
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
    ],
  },
]);
