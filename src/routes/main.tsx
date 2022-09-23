import React from "react";
import Main from "../pages/Main";
import Welcome from "../pages/Welcome";

export const main = {
    path: '/',
    element: <Main />,
    children: [
        {
            path: 'home/',
            element: <Welcome />
        }
    ]
}