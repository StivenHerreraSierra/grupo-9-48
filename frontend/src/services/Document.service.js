import httpClient from "./httpClient";

const END_POINT = "/api/user/documents";

const getAllDocuments = (username) => httpClient.get(`${END_POINT}/${username}`);

const insertDocument = (username, document) => httpClient.put(`${END_POINT}/upload/${username}`, document, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
});

const updateOwner = (username, newOwner) => httpClient.put(`${END_POINT}/updateowner/${username}`, newOwner);

const deleteDocument = (username, updatedDocuments) => httpClient.patch(`${END_POINT}/delete/${username}`, updatedDocuments);

const getDocumentsByTitle = (username, title) => httpClient.get(`${END_POINT}/${username}/${title}`);

export {
    getAllDocuments,
    insertDocument,
    updateOwner,
    deleteDocument,
    getDocumentsByTitle,
};