import httpClient from "./httpClient";

const END_POINT = "/api/user/documents";

const getAllDocuments = (username) => httpClient.get(`${END_POINT}/${username}`);
const insertDocument = (username, document) => httpClient.put(`${END_POINT}/upload/${username}`, document, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
});

export {
    getAllDocuments,
    insertDocument
};