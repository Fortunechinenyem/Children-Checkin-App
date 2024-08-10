import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [checkIns, setCheckIns] = useState([]);

  useEffect(() => {
    const fetchCheckIns = async () => {
      const response = await axios.get("/api/check-ins");
      setCheckIns(response.data);
    };
    fetchCheckIns();
  }, []);

  return (
    <div>
      <h2>Current Check-Ins</h2>
      <ul>
        {checkIns.map((checkIn) => (
          <li key={checkIn.id}>
            {checkIn.name} - {checkIn.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
