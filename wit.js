export default {
    name: "Witanime",
    baseUrl: "https://witanime.com",
    async search(query) {
        const url = `https://witanime.com/?s=${encodeURIComponent(query)}`;
        const resp = await fetch(url);
        const html = await resp.text();
        
        // This targets the anime cards on Witanime
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
        return { results };
    }
};
