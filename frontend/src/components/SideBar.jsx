import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCartArrowDown, faEnvelope, faCartFlatbed, faSitemap, faFile, faFileContract, faFileSignature, faBoxesPacking, faCashRegister } from '@fortawesome/free-solid-svg-icons';

const SideBar = ( {pageSelected, handlePageChange}) => {
    return (
        <div className="text-cuarto-medio min-w-1/6 flex flex-col border-r-2 border-cuarto-oscuro items-center p-5 h-screen font-inter">
            <h2 className='text-start w-full font-bold mb-4'>Main Menu</h2>
            <ul className='flex flex-col p-3 gap-4 justify-start font-semibold w-full'>
                <li onClick={()=>{handlePageChange('home')}}className={`flex flex-row gap-3 p-2 justify-start w-full cursor-pointer ${pageSelected=='home'? 'bg-cuarto-oscuro ':''} hover:bg-cuarto-oscuro  items-center rounded-lg px-3`}><FontAwesomeIcon icon={faHome} /> Home</li>
                <li onClick={()=>{handlePageChange('sales')}}className={`flex flex-row gap-3 p-2 justify-start w-full cursor-pointer ${pageSelected=='sales'? 'bg-cuarto-oscuro ':''} hover:bg-cuarto-oscuro  items-center rounded-lg px-3`}><FontAwesomeIcon icon={faCashRegister} /> Sales</li>
                <li onClick={()=>{handlePageChange('inventory')}}className={`flex flex-row gap-3 p-2 justify-start w-full cursor-pointer ${pageSelected=='inventory'? 'bg-cuarto-oscuro ':''} hover:bg-cuarto-oscuro  items-center rounded-lg px-3`}><FontAwesomeIcon icon={faBoxesPacking} /> Inventory</li>
                <li onClick={()=>{handlePageChange('report')}}className={`flex flex-row gap-3 p-2 justify-start w-full cursor-pointer ${pageSelected=='report'? 'bg-cuarto-oscuro ':''} hover:bg-cuarto-oscuro  items-center rounded-lg px-3`}><FontAwesomeIcon icon={faFileSignature} /> Report</li>
            </ul>
        </div>
    );
};

export default SideBar;