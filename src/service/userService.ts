import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://localhost:3000/api';

export const getUserById = async (userId: string): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch user');
  }
};