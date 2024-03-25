import React, { useEffect, useState } from 'react';
import { fetchBuses } from '../service/busService'; // Import fetchBuses function
import LoadingSpinner from './LoadingSpinner';

interface Bus {
  _id: string;
  registrationNumber: string;
  routeNo: string;
}

const BusesList: React.FC = () => {
  const [buses, setBuses] = useState<Bus[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const busesData = await fetchBuses();
        setBuses(busesData);

      } catch (error) {
        console.error('Error fetching buses:', error);
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-8">
      <LoadingSpinner loading={loading} />
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
