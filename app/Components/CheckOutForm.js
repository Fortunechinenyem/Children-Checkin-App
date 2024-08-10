"use client";
import { useState } from "react";
import axios from "axios";

const CheckOutForm = () => {
  const [childName, setChildName] = useState("");
  const [message, setMessage] = useState("");

  const handleCheckOut = async () => {
    try {
      const response = await axios.post("/api/check-out", { name: childName });
      setMessage(response.data.message);
      setChildName("");
    } catch (error) {
      setMessage("Error checking out. Please try again.");
    }
  };

  return (
    <div>
      <h2>Check-Out</h2>
      <input
        type="text"
        value={childName}
        onChange={(e) => setChildName(e.target.value)}
        placeholder="Enter child's name"
      />
      <button onClick={handleCheckOut}>Check Out</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CheckOutForm;
