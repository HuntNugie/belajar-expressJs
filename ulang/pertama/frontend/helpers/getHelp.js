import axios from "axios";

export const getData = async(api)=>{
    const response = await axios.get(api)
    const data = response.data
    return data
}