import axios from "axios";

const API_KEY = 'B5A8E5BC5A7942B19E0AF9A8D1BF4B8B'
export function getSearch<T>(query: string): Promise<T> {
     const params = {
          api_key: API_KEY,
          q: query,
          location:'Brasil'
     }
     let url = `https://api.serpwow.com/search`
     return axios.get(url, {params});
}