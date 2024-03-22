import { getToken } from "./utils";

// apiService.ts
const BASE_URL = 'http://localhost:3000/api'; // Assumes your Express API is served from the same origin

interface DepotData {
    _id: string,
    name: string;
    location: string;
}

async function addDepot(data: DepotData): Promise<any> {
    try {
        const response = await fetch(`${BASE_URL}/depots`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Failed to add depot');
        }
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

async function fetchDepots(): Promise<DepotData[]> {
    try {

        const token = getToken();
        if (!token) {
            throw new Error('No token found');
        }

        const response = await fetch(`${BASE_URL}/depots`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch depots');
        }
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

export { addDepot, fetchDepots };
