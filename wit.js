class WitAnime {
    constructor() {
        this.name = "Witanime Arabic";
        this.baseUrl = "https://witanime.com";
    }

    async search(query) {
        const url = `${this.baseUrl}/?s=${encodeURIComponent(query)}`;
        const response = await fetch(url);
        const html = await response.text();
        
        // This is a more robust way to grab the anime cards
        const regex = /<div class="anime-card-container">[\s\S]*?<a href="(.*?)">[\s\S]*?<img src="(.*?)"[\s\S]*?alt="(.*?)"/g;
        let match;
        const results = [];

        while ((match = regex.exec(html)) !== null) {
            results.push({
                title: match[3],
                url: match[1],
                poster: match[2]
            });
        }
        return results;
    }
}

// This is the critical part Nuvio needs to see the plugin
export default new WitAnime();
