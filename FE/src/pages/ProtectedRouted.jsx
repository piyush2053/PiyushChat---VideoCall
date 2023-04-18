import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import  useAuth  from './Login/Login';

export const ProtectRoutes = () => {
    const navigate = useNavigate();

    const { cookies } = useAuth();
    return cookies.token ? <Outlet/> : navigate("/");
};