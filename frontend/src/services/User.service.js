import httpClient from "./httpClient";

const END_POINT = "/api/users";

const getAllUsers = () => httpClient.get(END_POINT);
const insertUser = (user) => httpClient.post(END_POINT, user);
const getUser = (user) => httpClient.get(END_POINT, user);

export {
    getAllUsers,
    insertUser,
    getUser
};