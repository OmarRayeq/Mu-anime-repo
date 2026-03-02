export default {
    name: "Witanime",
    baseUrl: "https://witanime.com",
    async search(query) {
        const resp = await fetch(`https://witanime.com/?s=${encodeURIComponent(query)}`);
        const html = await resp.text();
        const results = []; // I'll help you finalize these selectors later
        return { results };
    }
};
