import React from 'react'
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';

function App() {
  return (
    <main className="text-center flex flex-col ">
      <Header/>
      <SolarSystem/>
      <Missions/>
    </main>
  );
}

export default App;
