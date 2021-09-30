import httpClient from "./httpClient";

const END_POINT="/api/dictionary";

const getDefinition = (word) => httpClient.get(`${END_POINT}/${word}`);

export {
    getDefinition
};