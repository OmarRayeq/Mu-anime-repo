export default {
    name: "Witanime Arabic",
    baseUrl: "https://witanime.com",
    async search(query) {
        const url = `https://witanime.com/?s=${encodeURIComponent(query)}`;
        const resp = await fetch(url);
        const html = await resp.text();
        
        // This regex finds the anime cards on the Witanime search page
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
