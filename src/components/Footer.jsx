import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          <a
            href="https://newsapi.org"
            target="_blank"
            className="hover:underline"
          >
            Powered by NewsAPI.org
          </a>
        </div>

        <div className="text-sm">
          <span>Created by <strong>Aritra Kumar Dutta</strong></span> 
          <a
            href="https://github.com/CarnageX19/short-news-reader"
            target="_blank"
            className="ml-2 text-blue-500 hover:underline"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
