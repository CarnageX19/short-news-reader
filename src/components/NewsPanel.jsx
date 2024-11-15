import React, { useState, useEffect } from "react";
import newsService from "../apis/Newsapi";
import Card from "./Card";
import Viewer from "./Viewer";

function NewsPanel({category="general"}) {
    const [news, setNews] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(4); // Show 4 items initially
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const newsData = await newsService.globalNews(category);
            setNews(newsData);
        };
        fetchData();
    }, [category]);

    const handleLoadMore = () => {
        setItemsToShow(prev => prev + 4)
    };

    const onViewDetails = (article) =>{
        setSelectedItem(article)
    }

    const onClose = () => {
        setSelectedItem(null);
    };

    return (  
        <div className="flex h-screen">
        <div
        className={`transition-all duration-300 ease-in-out ${
            selectedItem ? "w-2/3" : "w-full"
        } overflow-y-auto`}
        >
            {news.slice(0, itemsToShow).map((item, index) => (
                <Card 
                    key={index}
                    title={item.title}
                    photo_url={item.image}
                    link={item.url}
                    snippet={item.description}
                    content={item.content}
                    onViewDetails={onViewDetails}
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
        </div>
            {selectedItem && //Viewer will not be rendered if selectedItem is null
            <div className="w-1/3 bg-white shadow-lg">
                <Viewer 
                    title={selectedItem.title}
                    photo_url={selectedItem.photo_url}
                    description={selectedItem.snippet} 
                    content={selectedItem.content} 
                    url={selectedItem.link}
                    onClose={onClose}
                />
            </div>}
        </div>
    );
}

export default NewsPanel;
