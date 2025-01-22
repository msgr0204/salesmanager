import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCartArrowDown, faEnvelope, faCartFlatbed, faSitemap, faFile, faFileContract, faFileSignature, faBoxesPacking, faCashRegister } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
    return (
        <div className="text-cuarto-medio w-1/6 flex flex-col border-r-2 border-cuarto-oscuro items-center p-5 h-screen font-inter">
            <h2 className='text-start w-full font-bold mb-4'>Main Menu</h2>
            <ul className='flex flex-col p-3 gap-4 justify-start font-semibold w-full'>
                <li className='flex flex-row gap-3 p-2 justify-start w-full cursor-pointer bg-cuarto-oscuro   hover:bg-cuarto-oscuro  items-center rounded-lg px-3'><FontAwesomeIcon icon={faHome} /> Home</li>
                <li className='flex flex-row gap-3 p-2 justify-start w-full cursor-pointer hover:bg-cuarto-oscuro  items-center rounded-lg px-3'><FontAwesomeIcon icon={faCashRegister} /> Sales</li>
                <li className='flex flex-row gap-3 p-2 justify-start w-full cursor-pointer hover:bg-cuarto-oscuro  items-center rounded-lg px-3'><FontAwesomeIcon icon={faBoxesPacking} /> Inventory</li>
                <li className='flex flex-row gap-3 p-2 justify-start w-full cursor-pointer hover:bg-cuarto-oscuro  items-center rounded-lg px-3'><FontAwesomeIcon icon={faFileSignature} /> Report</li>
            </ul>
        </div>
    );
};

export default SideBar;