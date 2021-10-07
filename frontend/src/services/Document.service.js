import httpClient from "./httpClient";

const END_POINT = "/api/user/documents";

const getAllDocuments = (username) => httpClient.get(`${END_POINT}/${username}`);

export {
    getAllDocuments
};