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
            <div className='flex flex-row justify-between w-5/6 px-5'>
                <div className='w-1/5'>
                    <input 
                    className='py-1 px-3 rounded-lg w-full bg-cuarto-oscuro  placeholder:text-cuarto-medio border-[1px] border-cuarto-medio '
                    placeholder='Search by ID or SKU'
                    type="text" />
                </div>
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