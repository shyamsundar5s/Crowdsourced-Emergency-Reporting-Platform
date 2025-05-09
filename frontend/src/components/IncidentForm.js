import React, { useState } from 'react';

function IncidentForm() {
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const incident = { type, description, location: { lat, lng } };

    try {
      const response = await fetch('http://localhost:5000/api/incidents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(incident),
      });

      if (response.ok) {
        alert('Incident reported successfully!');
      }
    } catch (error) {
      console.error('Error reporting incident:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Report an Incident</h2>
      <input
        type="text"
        placeholder="Type (e.g., fire)"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Latitude"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Longitude"
        value={lng}
        onChange={(e) => setLng(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default IncidentForm;
