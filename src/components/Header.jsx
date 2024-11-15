import React from "react";
import Menu from "./Menu";

function Header({ toggleSidebar=false }) {
    return (
        <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
            <Menu toggleSidebar={toggleSidebar} />
            <h1 className="text-2xl font-bold">News App</h1>
        </header>
    );
}

export default Header;