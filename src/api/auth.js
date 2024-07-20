import axios from './axios';

export const getCurrentUser = async () => {
    try {
        const response = await axios.get('/profile');
        return response.data;
    } catch (error) {
        console.error('Error fetching current user:', error);
        throw error;
    }
};


export const registerRequest = async (user) => axios.post(`/auth/register`, user);

export const loginRequest = async (user) => axios.post(`/auth/login`, user);

export const verifyTokenRequest = async () => axios.get(`/auth/verify`);

export const logout = async () => axios.post('/auth/logout');