import axios from 'axios';
const users_url = import.meta.env.VITE_USERS_BACKEND_URL || 'http://localhost:3000/users';


export const login = async (user) => {
    const res = await axios.post(`${users_url}/login`,user);
    return res.data;
}

export const createUser = async (formData) => {
    const res = await axios.post(`${users_url}/create`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return res.data;
}

export const listAllUsers = async () => {
    const options = {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }
    const res = await axios.get(`${users_url}`,options);
    return res.data;
}    

export const getUserDetails = async (userName) => {
    const res = await axios.get(`${users_url}/${userName}`);
    return res.data;
}

export const getProfilePic = async(userName) => {
    const profilePicResponse = await axios.get(`${users_url}/profilePic/${userName}`, {
        responseType: 'blob'
    });
    const url = URL.createObjectURL(profilePicResponse.data);
    return url;
}