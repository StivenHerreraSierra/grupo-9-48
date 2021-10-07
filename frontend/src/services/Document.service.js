import httpClient from "./httpClient";

const END_POINT = "/api/user/documents";

const getAllDocuments = (username) => httpClient.get(`${END_POINT}/${username}`);
const updateOwner = (username, newOwner) => httpClient.put(`${END_POINT}/updateowner/${username}`, newOwner);

export {
    getAllDocuments,
    updateOwner
};