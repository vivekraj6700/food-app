import axios from "axios";

const BACKEND_URL = 'http://localhost:8080';

const instance = axios.create({
    withCredentials: true
});

export async function registerUser(user) {
    const response = await instance.post(`${BACKEND_URL}/api/v1/auth/register`, user);
    if (response.status !== 201) {
        throw new Error('cannnot register the user at the moment');
    }
    return response.data;
}

export async function loginUser(user) {
    const response = await instance.post(`${BACKEND_URL}/api/v1/auth/login`, user);
    if (response.status !== 200) {
        throw new Error('cannnot register the user at the moment');
    }
    return response.data;
}

export async function logoutUser() {
    const response = await instance.post(`${BACKEND_URL}/api/v1/auth/logout`);
    if (response.status !== 200) {
        throw new Error('cannnot register the user at the moment');
    }
    return response.data;
}

export async function fetchProfile() {
    const response = await instance.get(`${BACKEND_URL}/api/v1/users/profile`);
    if (response.status !== 200) {
        throw new Error('cannnot register the user at the moment');
    }
    return response.data;
}

export async function placeOrder(items) {
    const response = await instance.post(`${BACKEND_URL}/api/v1/orders`, {items});
    if (response.status !== 200) {
        throw new Error('cannnot register the user at the moment');
    }
    return response.data;
}

