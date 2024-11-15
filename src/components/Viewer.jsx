import React from "react";

function Viewer({ title, photo_url, description, content, url,onClose }) {
    
    return (
        <div className="h-full p-6 relative overflow-y-auto">
            <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                onClick={onClose}
            >
                ✖ Close
            </button>
            <div className="mt-6">
                <img
                    src={photo_url}
                    alt={title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h1 className="text-2xl font-bold mb-4">{title}</h1>
                <p className="text-gray-700 mb-6">{description}</p>
                <div className="text-gray-600">{content}</div>
                <a href={url} className="text-blue-800 hover:text-purple-900 underline">Full Text</a>
            </div>
        </div>
    );
}

export default Viewer;
