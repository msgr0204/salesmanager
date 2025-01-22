import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.webp'


const Header = () => {
    return (
        <header className='w-full flex flex-row items-center p-2 border-b-[2px] border-cuarto-oscuro font-inter '>
            <div className='w-1/6 px-5'>
                <img className='w-2/3' src={logo} alt="" />
            </div>
            <div className='flex flex-row justify-end w-5/6 px-5'>
                
                <div className='flex flex-row gap-3 text-2xl text-cuarto-medio items-center'>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faBell} />
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
            </div>
        </header>
    );
};

export default Header;