import React from 'react';
import Header from "./Header";
import {Outlet} from 'react-router-dom';
import Footer from "./Footer";
import InputSlider from "./Slider";

const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <InputSlider/>
            <Footer />
        </div>
    );
};

export default Layout;