import { BASE_URL, apiClient } from "."
import { HeroRespType } from "./types";

const getHero = async (): Promise<Array<HeroRespType>> => {
    const response = await apiClient.get(`${BASE_URL}/hero/`);
    const data = await response.data;
    return data
}

const getAbout = async()=>{
    
}

export { getHero }