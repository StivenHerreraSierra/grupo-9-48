import httpClient from "./httpClient";

const END_POINT = "/api/users";

const getAllUsers = () => httpClient.get(END_POINT);
const insertUser = (user) => httpClient.post(END_POINT, user);
const getUser = (username) => httpClient.get(END_POINT + "/" + username);
const validateUser = (user) => httpClient.post(END_POINT + "/validation", user);
const updateUser = (username, userUpdated) => httpClient.put(END_POINT + "/" + username, userUpdated);

export {
    getAllUsers,
    insertUser,
    getUser,
    validateUser,
    updateUser
};