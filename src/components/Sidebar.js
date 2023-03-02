import React from 'react';
import logo from '../assets/img/profile.jpeg'; 
import { useNavigate } from "react-router-dom";

export function Sidebar() {
    const navigate = useNavigate();
    
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p className="App-name">Innaka Dylee</p>
                <p className="App-bio">Hi, mate! My name is Innaka Dylee. Currently, I am studying Software Engineering in college. As a student as well as a software engineer I would like to help readers by providing a step by step guide on how to install Ubuntu Server In VirtualBox. For more details, please see the review on the side.</p>
           
                <div className="button-sidebar">
                    <div ><button className="sidebar-button" onClick={() => navigate('/')}>HOME</button></div>
                </div>
            </header>
            
        </div>
    )
}

export default Sidebar;