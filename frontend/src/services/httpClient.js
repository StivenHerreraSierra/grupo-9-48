import axios from "axios";

const httpClient = axios.create({
    timeout: 25000,
    headers: {
        //"Content-type": "application/json"
        "Content-Type": "application/json"
    }
});

export default httpClient;