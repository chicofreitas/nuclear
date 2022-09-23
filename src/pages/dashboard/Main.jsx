import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <nav>Navbarfooter</nav>
            <Outlet />
            <footer>Dashboard Footer</footer>
        </div>
    );
};

export default Main;