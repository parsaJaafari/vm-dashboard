import axios from "axios";

export const getSystemTypes = async () => {
    const res = await axios.get("/system-types");
    return res.data
}