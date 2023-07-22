import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Homepage from "../pages/Home/Homepage";
import Colleges from "../pages/Colleges/Colleges";
import MyCollege from "../pages/MyCollege/MyCollege";
import Admission from "../pages/Admission/Admission";
import Details from "../pages/CollegeDetails/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
        loader: () => fetch("http://localhost:5000/colleges"),
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
        loader: () => fetch("http://localhost:5000/colleges"),
      },
      {
        path: "/myCollege",
        element: <MyCollege></MyCollege>,
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
        loader: () => fetch("http://localhost:5000/colleges"),
      },
      {
        path: "/colleges/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/colleges/${params.id}`),
      },
    ],
  },
]);
