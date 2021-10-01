import React from 'react'
import {MainPageWrapper } from './style.js';
import Contact from '../contact-bar/index.jsx';
import MenuBar from '../menu-bar/index.jsx';
import Dashboard from '../dashboard-bar/index.jsx';


function MainPage() {
    return (

        <MainPageWrapper>

            <MenuBar/>


            <Dashboard/>


            <Contact/>

        </MainPageWrapper>
        
    )
}

export default MainPage
