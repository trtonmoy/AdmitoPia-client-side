import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Homepage from "../pages/Home/Homepage";
import Colleges from "../pages/Colleges/Colleges";
import MyCollege from "../pages/MyCollege/MyCollege";
import Admission from "../pages/Admission/Admission";
import Details from "../pages/CollegeDetails/Details";
import Enroll from "../pages/Enroll/Enroll";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
        loader: () =>
          fetch("https://admitopia-server-side.vercel.app/colleges"),
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
        loader: () =>
          fetch("https://admitopia-server-side.vercel.app/colleges"),
      },
      {
        path: "/myCollege",
        element: <MyCollege></MyCollege>,
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
        loader: () =>
          fetch("https://admitopia-server-side.vercel.app/colleges"),
      },
      {
        path: "/admission/enroll/:id",
        element: <Enroll></Enroll>,
        loader: ({ params }) =>
          fetch(
            `https://admitopia-server-side.vercel.app/admission/enroll/${params.id}`
          ),
      },
      {
        path: "/colleges/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(
            `https://admitopia-server-side.vercel.app/colleges/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
