function Sidebar({ isVisible, toggleSidebar, changeCategory }) {
    const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
    return (
        <div
            className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg transform transition-transform duration-300 ${
                isVisible ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            {/* cross button */}
            <div className="flex justify-end p-4">
                <button
                    onClick={toggleSidebar}
                    className="text-white rounded-full hover:bg-red-600 transition duration-200"
                >
                    &times;
                </button>
            </div>
            <ul className="p-6 space-y-4">
                {categories.map((category) => (
                    <li
                        key={category}
                        className="hover:text-gray-300 cursor-pointer capitalize"
                        onClick={() => changeCategory(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar