import React from 'react';
import Navbar from '../assets/components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Banners from '../assets/components/Banners/Banners';
import Footer from '../assets/components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar /> 
            <Outlet /> 
            <Footer />
        </div>
    );
};

export default MainLayout;