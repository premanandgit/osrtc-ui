import { getToken } from "./utils";

// apiService.ts
const BASE_URL = 'http://localhost:3000/api'; // Assumes your Express API is served from the same origin

enum LedTypes {
  Aargee = 'aargee',
  Sumith = 'sumith',
  Microcraft = 'microcraft',
  Masstrans = 'masstrans',
}

interface BusFormData {
  _id: string;
  registrationNumber: string;
  routeNo: string;
  ledType: LedTypes;
  depotId: string;
}

async function fetchBuses(): Promise<BusFormData[]> {
  try {

      const token = getToken();
      if (!token) {
          throw new Error('No token found');
      }

      const response = await fetch(`${BASE_URL}/buses`, {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      });
      if (!response.ok) {
          throw new Error('Failed to fetch buses');
      }
      return await response.json();
  } catch (error) {
      console.error('API Error:', error);
      throw error;
  }
}

async function addBus(data: BusFormData): Promise<any> {
  try {
    const token = getToken();
    if (!token) {
        throw new Error('No token found');
    }

    const response = await fetch(`${BASE_URL}/buses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to add bus');
    }
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// Add other API functions as needed

export { addBus, fetchBuses };
