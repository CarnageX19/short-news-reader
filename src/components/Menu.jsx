import React, { useState } from 'react';

function Menu({ toggleSidebar }) {
    return (
            <button
                className="text-white font-bold bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                onClick={toggleSidebar}
            >
                ☰ Menu
            </button>
        );
}

export default Menu