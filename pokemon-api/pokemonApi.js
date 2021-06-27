const API_URL = "https://api.pokemontcg.io/v2/cards?q=";

export function getPokemon(options) {
    let apiRequest = API_URL;
    for (const [key, val] of Object.entries(options)) {
        if (val == null) continue;
        apiRequest += `${key}:${val} `;
    }

    return fetch(apiRequest)
        .then((res) => res.json())
        .catch((err) => ({ error: true, msg: err }));
}
