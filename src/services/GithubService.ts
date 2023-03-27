import axios from "axios";
import HTTPS from "./Service";


export async function getUser (userName: string): Promise<any> {
     return axios.get(`${HTTPS}users/${userName}`)
}