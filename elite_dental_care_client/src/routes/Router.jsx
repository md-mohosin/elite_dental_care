import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import DoctorDetails from "../Pages/Home/DoctorDetails/DoctorDetails";
import SignUp from "../Pages/authentication/SignUp";
import Login from "../Pages/authentication/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "doctor_details/:id",
        element: <DoctorDetails></DoctorDetails>

      }
    ]
  },
  {
    path: "signUp",
    element: <SignUp></SignUp>
  },
  {
    path:"login",
    element:<Login></Login>
  }
]);