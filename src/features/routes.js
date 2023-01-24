import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Principal from '../pages/Principal';
import Users from '../pages/Users';
import Show from '../pages/Show';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<Principal />} path="/catalog" exact />
                <Route element={<Users />} path="/users" exact />
                <Route element={<Show />} path="/show/:type/:id" exact />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;