// BusForm.tsx
import React, { useState, useEffect } from 'react';
import { addBus } from '../service/busService'; // Import API function
import { fetchDepots } from '../service/depotService'; // Import fetchDepots function

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

interface BusFormProps {
  onSubmit: (formData: BusFormData) => void;
}

const BusForm: React.FC<BusFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<BusFormData>({
    registrationNumber: '',
    routeNo: '',
    ledType: LedTypes.Aargee,
    depotId: '',
  });
  const [depots, setDepots] = useState<any[]>([]); // Define Depot interface for depots state

  useEffect(() => {
    // Fetch depots when the component mounts
    fetchDepotsData();
  }, []);

  const fetchDepotsData = async () => {
    try {
      const depotsData = await fetchDepots();
      setDepots(depotsData);
    } catch (error) {
      console.error('Error fetching depots:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await addBus(formData); // Call API function
      console.log('Bus added:', response);
      // Reset form or show success message
    } catch (error) {
      console.error('Error adding bus:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="registrationNumber" className="block text-gray-700 text-sm font-bold mb-2">
            Registration Number
          </label>
          <input
            type="text"
            id="registrationNumber"
            name="registrationNumber"
            placeholder="Registration Number"
            value={formData.registrationNumber}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="routeNo" className="block text-gray-700 text-sm font-bold mb-2">
            Route Number
          </label>
          <input
            type="text"
            id="routeNo"
            name="routeNo"
            placeholder="Route Number"
            value={formData.routeNo}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ledType" className="block text-gray-700 text-sm font-bold mb-2">
            LED Type
          </label>
          <select
            id="ledType"
            name="ledType"
            value={formData.ledType}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            {Object.values(LedTypes).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="depotId" className="block text-gray-700 text-sm font-bold mb-2">
            Depot
          </label>
          <select
            id="depotId"
            name="depotId"
            value={formData.depotId}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Depot</option>
            {depots.map((depot) => (
              <option key={depot._id} value={depot._id}>
                {depot.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Bus
          </button>
        </div>
      </form>
    </div>
  );
};

export default BusForm;
