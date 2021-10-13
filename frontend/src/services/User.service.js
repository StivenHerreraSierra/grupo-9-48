import httpClient from "./httpClient";

const END_POINT = "/api/users";

const getAllUsers = () => httpClient.get(END_POINT);
const insertUser = (user) => httpClient.post(END_POINT, user);
const getUser = (username) => httpClient.get(`${END_POINT}/${username}`);
const validateUser = (user) => httpClient.post(`${END_POINT}/validation`, user);
const updateUser = (username, userUpdated) => httpClient.put(`${END_POINT}/${username}`, userUpdated);
const updateUserPicture = (username, picture) => httpClient.patch(`${END_POINT}/picture/${username}`, picture, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
});

export {
    getAllUsers,
    insertUser,
    getUser,
    validateUser,
    updateUser,
    updateUserPicture
};