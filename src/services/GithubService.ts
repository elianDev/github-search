import axios from "axios";
import https from "https";
import HTTPS from "./Service";

const API_KEY = 'B5A8E5BC5A7942B19E0AF9A8D1BF4B8B'


// const httpAgent = new https.Agent({
//      rejectUnauthorized: false,
//    });



export async function getUser (userName: string): Promise<any> {
     return axios.get(`${HTTPS}users/${userName}`)
}

export function getSearch(query: string): Promise<any> {
     const params = {
          api_key: API_KEY,
          q: query
     }
     let url = `https://api.serpwow.com/search`
     return axios.get(url, {params});
}