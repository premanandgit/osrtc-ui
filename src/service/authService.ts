import axios, { AxiosResponse } from 'axios';
const API_URL = 'http://localhost:3000/api/auth';

interface LoginCredentials {
    username: string;
    password: string;
}

export const login = async (credentials: LoginCredentials): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to login')
    }
}