// DepotForm.tsx
import React, { useState } from 'react';
import { addDepot } from '../service/depotService'; // Import API function

interface DepotFormData {
  name: string;
  location: string;
}

const DepotForm: React.FC = () => {
  const [formData, setFormData] = useState<DepotFormData>({
    name: '',
    location: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await addDepot(formData); // Call API function
      console.log('Depot added:', response);
      // Reset form or show success message
    } catch (error) {
      console.error('Error adding depot:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Depot Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Depot Name"
          value={formData.name}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
          Depot Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Depot Location"
          value={formData.location}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Depot
        </button>
      </div>
    </form>
  </div>
  );
};

export default DepotForm;
