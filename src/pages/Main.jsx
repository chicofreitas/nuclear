import React from 'react';

import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <nav>
                Navigation bar
            </nav>

            <Outlet />

            <footer>
                Footer
            </footer>
        </div>
    );
};

export default Main;