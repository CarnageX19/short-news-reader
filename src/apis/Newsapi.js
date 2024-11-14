import conf from "../global-configs/conf";

export class Service {
    async globalNews() {
        const url = 'https://gnews.io/api/v4/search?q=general&lang=en&country=in&max=10&apikey=' + conf.newsapikey;

        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
            const data = await res.json();
            console.log(data.articles)
            return data.articles
        } catch (error) {
            console.error(`Error while fetching: ${error}`);
        }
    }
}

const newsService = new Service();
export default newsService;