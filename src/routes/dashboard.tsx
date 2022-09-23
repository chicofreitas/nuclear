import React from 'react'
import Main from '../pages/dashboard/Main'

export const dashboard = {
    path: 'dashboard',
    element: <Main />,
    children: [
        {
            path: 'dashboard/posts',
            element: <h1>Posts page</h1>
        }
    ]
}