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
import Profile from "../Pages/Dashboard/Sidebar/Profile";
import AllUsers from "../Pages/Dashboard/Sidebar/AdminSidebar/AllUsers/AllUsers";
import AddDoctor from "../Pages/Dashboard/Sidebar/AdminSidebar/AddDoctor/AddDoctor";
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
    path: 'dashboard',
    element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
    children: [
      {
        path: "profile",
        element: <PrivetRoute><Profile></Profile></PrivetRoute>
      },
      {
        path:"allUsers_admin",
        element:<AllUsers></AllUsers>
      },
      {
        path:"addDoctor_admin",
        element:<AddDoctor></AddDoctor>
      }
    ]
  }
]);