import { API } from "../config/api";
import axios from "axios";

const get = async (url) => {
    try {
        let data = [];
        data = (await API.get(url)).data;
        return data;
    } catch (error) {
        console.log(error.message)
        return [];
    }
}

const getMultipleEndpoints = async (urls) => {
    try {
        let data = [];
        let endpoints = [...urls];

        data = await axios.all(endpoints.map((endpoint) => API.get(endpoint)));
        return buildData(data);
    } catch (error) {
        console.log(error.message)
        return [];
    }
}

const post = async (url, data) => {
    try {
        let result = [];
        result = await API.post(url, data);
        return result;
    } catch (error) {
        console.log("Error with POST: ", error);
        return [];
    }
};

const put = async (url, data) => {
    try {
        let result = [];
        result = await API.put(url, data);
        return result;
    } catch (error) {
        console.log("Error with PUT: ", error);
        return [];
    }
}


const DELETE = async (url) => {
    try {
        let result = [];
        result = await API.delete(url);
        return result;
    } catch (error) {
        console.log("Error with DELETE: ", error);
        return [];
    }
}

/**
 * This will take the title from the pocketguides and merge them into to the corresponding
 * @param arr
 * @returns {*[]}
 */
const buildData = (arr) => {
    // some implementation ...
    return null;
}


export const fetchService = {
    get,
    getMultipleEndpoints,
    post,
    put,
    DELETE,
};
