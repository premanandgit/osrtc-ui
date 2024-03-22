// apiService.ts
const BASE_URL = 'http://localhost:3000/api'; // Assumes your Express API is served from the same origin

enum LedTypes {
  Aargee = 'aargee',
  Sumith = 'sumith',
  Microcraft = 'microcraft',
  Masstrans = 'masstrans',
}

interface BusFormData {
  registrationNumber: string;
  routeNo: string;
  ledType: LedTypes;
  depotId: string;
}

async function addBus(data: BusFormData): Promise<any> {
  try {
    const response = await fetch(`${BASE_URL}/buses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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

export { addBus };
