import React from 'react'
import Main from '../pages/dashboard/Main'
import Authorize from '../contexts/auth/Authorize'

export const dashboard = {
    path: 'dashboard',
    element: <Authorize><Main /></Authorize>,
    children: [
        {
            path: 'posts/',
            element: <h1>Posts page</h1>
        }
    ]
}