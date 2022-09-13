import axios from "axios";

export const getCountries = async () => {
    const res = await axios.get("/countries");
    return res.data
}