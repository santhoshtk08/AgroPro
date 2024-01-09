import React from 'react';
import { FaWhatsappSquare } from "react-icons/fa";
const Navbar = () => {
    const openWhatsApp = () => {
        const phoneNumber = '9345655220';
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, '_blank');
    };

    return (
        <nav className="bg-white p-4 flex justify-between items-center h-20">
            {/* Title on the left */}
            <div className="text-black font-bold text-lg">Your Title</div>

            {/* Navigation links on the right */}
            <div className="flex items-center space-x-4">
                <a href="/home" className="text-black text-2xl font-semibold hover:text-green-900 focus:outline-none">
                    Home
                </a>
                <a href="/products" className="text-black text-2xl font-semibold hover:text-green-900 focus:outline-none">
                    Products
                </a>
                <a href="/about" className="text-black text-2xl font-semibold hover:text-green-900 focus:outline-none">
                    About Us
                </a>
                <button
                    className="text-black text-2xl font-semibold hover:text-green-900 focus:outline-none"
                    onClick={openWhatsApp}
                >
                    Contact Us
                </button>
                <div className='object-cover hover:cursor-pointer' onClick={openWhatsApp}>
                    <FaWhatsappSquare />
                </div>

            </div>

            {/* WhatsApp icon */}


        </nav>
    );
};

export default Navbar;
