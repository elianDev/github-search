import axios from "axios";
import https from "https";
import HTTPS from "./Service";

const API_KEY = 'e50a3466d2cc793b8ef2309f089ceee2'

const httpAgent = new https.Agent({
     rejectUnauthorized: false,
   });



export async function getUser (userName: string): Promise<any> {
     return axios.get(`${HTTPS}users/${userName}`)
}

export function getSearch(query: string): Promise<any> {
     let url = `http://api.serpstack.com/search?access_key=${API_KEY}&type=web&query=${query}&gl=br`
     return axios.get(url, {
          httpsAgent: httpAgent,
        });
}