import React, { useState } from 'react';

function Menu({ toggleNavBar }) {
    return (
        <div className="bg-gray-800 p-4">
            <button
                className="text-white font-bold bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                onClick={toggleNavBar}
            >
                ☰ Menu
            </button>
        </div>
    );
}

export default Menu