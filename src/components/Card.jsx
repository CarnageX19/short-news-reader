import React from "react";

function Card({ title = "", link = "", photo_url = "", snippet = "" }) {
    return (
        <div className="flex flex-col justify-center mb-2"> 
            <div className="relative flex flex-col md:flex-row md:space-x-3 space-y-2 md:space-y-0 rounded-lg shadow-md p-3 max-w-xs md:max-w-2xl mx-auto border border-gray-200 bg-white">
                <div className="w-full md:w-1/3 bg-white grid place-items-center">
                    <img src={photo_url} alt="Image Unavailable" className="rounded-lg" />
                </div>
                <div className="w-full md:w-2/3 bg-white flex flex-col space-y-1 p-2">
                    <h3 className="font-semibold text-gray-800 md:text-lg text-sm">{title}</h3>
                    <p className="text-gray-500 text-sm">{snippet}</p>
                    <p className="text-sm font-semibold text-blue-500">
                        <a href={link}>Learn more...</a> 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;
