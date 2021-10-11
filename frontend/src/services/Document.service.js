import httpClient from "./httpClient";

const END_POINT = "/api/user/documents";

const getAllDocuments = (username) => httpClient.get(`${END_POINT}/${username}`);

const insertDocument = (username, document) => httpClient.put(`${END_POINT}/upload/${username}`, document, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
});

const updateOwner = (username, newOwner) => httpClient.put(`${END_POINT}/updateowner/${username}`, newOwner);

export {
    getAllDocuments,
    insertDocument,
    updateOwner
};