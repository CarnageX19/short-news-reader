import conf from "../global-configs/conf"

export class Service{
    
    async globalNews()
    {
        const url = 'https://news-api14.p.rapidapi.com/v2/search/articles?query=india&language=en';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': conf.newsapikey,
                'x-rapidapi-host': 'news-api14.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(`news: ${result.data[0].title}`)
            return result.data
        } catch (error) {
            console.error(error);
        }
    }
}

const newsService = new Service;
export default newsService;