import React from 'react';
import './App.css';
import Map from './components/Map';
import IncidentForm from './components/IncidentForm';

function App() {
  return (
    <div className="App">
      <h1>Crowdsourced Emergency Reporting</h1>
      <IncidentForm />
      <Map />
    </div>
  );
}

export default App;
