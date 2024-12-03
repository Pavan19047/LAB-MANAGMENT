import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Student = ({ onRollNumberSubmit }) => {
  const [rollNumber, setRollNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rollNumber) {
      toast.error('Please enter a roll number!');
      return;
    }
    onRollNumberSubmit(rollNumber);
  };

  return (
    <div className="homepage">
      <h1>Component Management System</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="rollNumber">Enter Roll Number:</label>
        <input
          type="text"
          id="rollNumber"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          placeholder="Enter your roll number"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Student;
