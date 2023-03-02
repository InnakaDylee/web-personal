import React from 'react';
import logo from '../assets/img/profile.jpeg';
import dec1 from '../assets/img/programming.png';
import dec2 from '../assets/img/codebreak.svg'; 
import dec3 from '../assets/img/code.png';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export function ProfileTemplate() {
    const navigate = useNavigate();
    
    return (
        <div>
            <div className="profil">
                <img src={logo} className="profil-logo" alt="logo"/>
                    <div className="profil-desc">
                        <p className="profil-name">Innaka Dylee</p>
                        <p className="profil-bio">Hi, mate! My name is Innaka Dylee. Currently, I am studying Software Engineering in college. here I will share a few tutorials about operating systems, from installation to theory and practice</p>
                    </div>
                    <div className="button-profil">
                            <div ><button className="profil-button" onClick={() => navigate('./ContentUbuntu')}>Ubuntu Tutor</button></div>
                            <br></br>
                            <div ><button className="profil-button" onClick={() => navigate('./ContentTugas2')}>Management File</button></div>
                    </div>
                    <img src={dec1} className="dec1" alt='dec1'/>
                    <img src={dec2} className="dec2" alt='dec2'/>
                    <img src={dec3} className="dec3" alt='dec4'/>
            </div>

        </div>
    )
}

export default ProfileTemplate;