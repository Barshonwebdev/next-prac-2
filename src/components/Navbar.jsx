import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-red-500 py-5'>
            <ul className='flex justify-center space-x-4 text-white text-2xl'>
                <li>Home</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
        </div>
    );
};

export default Navbar;