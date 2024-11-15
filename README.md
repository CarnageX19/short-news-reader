# Short News Reader App

A simple news app that fetches the latest news from [NewsAPI](https://newsapi.org/) based on categories.
(Uses GNEWS Proxy)
<img src="demo.gif" alt="DEMO" width="600" />


## Features
- Displays news articles based on selected categories (e.g., General, Business, Entertainment).
- View article details in a modal.
- "Load More" functionality to fetch more articles.

## Newsapi/GNews API Key

#### To Add your own API Key:
1. Rename ```.env.sample``` to ```.env```.

2. Add your key in this line(Your API Key):
```bash
VITE_NEWS_API_KEY="<Your API Key>"
```

### IMPORTANT NOTE:
Due to CORS not working with localhost the project uses GNews Proxy for Newsapi, if you have premium version which has CORS enabled, you can replace the line ![here](https://github.com/CarnageX19/short-news-reader/blob/main/src/apis/Newsapi.js#L5) with newsapi.

## Credits
- Built using [NewsAPI](https://newsapi.org/), [GNews Proxy](https://gnews.io/).
- Created by Aritra Kumar Dutta