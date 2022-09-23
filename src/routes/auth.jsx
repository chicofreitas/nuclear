import React from "react";
import Login from "../pages/auth/Login";
import Recover from "../pages/auth/Recover";
import Register from "../pages/auth/Register";

export const login = {
    path: 'login/',
    element: <Login />,
}

export const register = {
    path: 'register/',
    element: <Register />
}

export const recover = {
    path: '/recover',
    element: <Recover />
}