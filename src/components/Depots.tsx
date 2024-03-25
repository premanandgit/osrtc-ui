import React, { useEffect, useState } from 'react';
import { fetchDepots } from '../service/depotService'; // Import fetchDepots function

interface Depot {
  _id: string;
  name: string;
  location: string;
}

const DepotsList: React.FC = () => {
  const [depots, setDepots] = useState<Depot[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const depotsData = await fetchDepots();
        setDepots(depotsData);
      } catch (error) {
        console.error('Error fetching depots:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">List of Depots</h2>
      <ul>
        {depots.map((depot) => (
          <li key={depot._id} className="mb-2">
            <span className="font-bold">{depot.name}</span> - {depot.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepotsList;
