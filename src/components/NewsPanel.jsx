import React, { useState, useEffect } from "react";
import newsService from "../apis/Newsapi";
import Card from "./Card";

function NewsPanel() {
    const [news, setNews] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(4); // Show 4 items initially

    useEffect(() => {
        const fetchData = async () => {
            const newsData = await newsService.globalNews();
            setNews(newsData);
        };
        fetchData();
    }, []);

    const handleLoadMore = () => {
        setItemsToShow(prev => prev + 4); // add 4 more items on the display
    };

    return (
        <>  
            {news.slice(0, itemsToShow).map((item, index) => (
                <Card 
                    key={index}
                    title={item.title}
                    photo_url={item.image}
                    link={item.url}
                    snippet={item.description}
                />
            ))}
            {itemsToShow < news.length && (  //if itemsToShow reaches total news limit, hide loadmore button
                <div className="flex justify-center mt-4">
                    <button 
                        onClick={handleLoadMore} 
                        className="bg-white text-black px-1 py-1 rounded-lg shadow-lg hover:bg-gray-100 transition duration-200 ease-in-out"
                    >
                        Load More...
                    </button>
                </div>
            )}
        </>
    );
}

export default NewsPanel;
