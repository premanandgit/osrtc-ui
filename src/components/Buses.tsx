import React, { useEffect, useState } from 'react';
import { fetchBuses } from '../service/busService'; // Import fetchBuses function

interface Bus {
  _id: string;
  registrationNumber: string;
  routeNo: string;
}

const BusesList: React.FC = () => {
  const [buses, setBuses] = useState<Bus[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const busesData = await fetchBuses();
        setBuses(busesData);
      } catch (error) {
        console.error('Error fetching buses:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">List of Buses</h2>
      <ul>
        {buses.map((bus) => (
          <li key={bus._id} className="mb-2">
            {bus.registrationNumber} - {bus.routeNo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusesList;
