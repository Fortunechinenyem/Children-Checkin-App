"use client";
import { useState } from "react";
import axios from "axios";

const CheckInForm = () => {
  const [childName, setChildName] = useState("");
  const [message, setMessage] = useState("");

  const handleCheckIn = async () => {
    try {
      const response = await axios.post("/api/check-in", { name: childName });
      setMessage(response.data.message);
      setChildName("");
    } catch (error) {
      setMessage("Error checking in. Please try again.");
    }
  };

  return (
    <div>
      <h2>Check-In</h2>
      <input
        type="text"
        value={childName}
        onChange={(e) => setChildName(e.target.value)}
        placeholder="Enter child's name"
      />
      <button onClick={handleCheckIn}>Check In</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CheckInForm;
