import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import DoctorDetails from "../Pages/Home/DoctorDetails/DoctorDetails";
import SignUp from "../Pages/authentication/SignUp";
import Login from "../Pages/authentication/Login";
import PrivetRoute from "./PrivetRoute";
import Appointment from "../Pages/appointment/Appointment";
import AppointmentForm from "../Pages/appointment/AppointmentForm";
import Dashboard from "../layouts/Dashboard";
import Sidebar from "../Pages/Dashboard/Sidebar/Sidebar";
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
        element: <PrivetRoute><DoctorDetails></DoctorDetails></PrivetRoute>

      },
      {
        path: "appointment",
        element: <Appointment></Appointment>
      },
      {
        path: "appointment/:id",
        element: <AppointmentForm></AppointmentForm>
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "login",
        element: <Login></Login>
      }
    ]
  },
  {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
  {
    path:"sidebar",
    element:<Sidebar></Sidebar>
  }
    ]
  }
]);