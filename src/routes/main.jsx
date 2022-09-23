import React from "react";
import About from "../pages/About";
import Main from "../pages/Main";
import Welcome from "../pages/Welcome";

export const main = {
    path: '/',
    element: <Main />,
    children: [
        {
            path: 'home/',
            element: <Welcome />
        },
        {
            path: 'about/',
            element: <About />
        },
    ]
}