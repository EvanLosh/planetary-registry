import './App.css';
import Registry from './components/Registry';
import Header from "./components/Header"
import { useEffect, useState } from 'react';

function App() {
  // state for holding the database
  const [planets, setPlanets] = useState([])
  const url = 'http://localhost:8085/planets'

  // get the database, put into a state
  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(data => setPlanets(data))
  }, [])

  // pass this function down to NewPlanetForm
  function handleAddPlanet(newPlanet) {
    // post new planet to the db
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlanet)
    })
      .then(r => r.json())
      .then(postResponse => {
        console.log(postResponse)
        // update planets state with the response
        setPlanets([...planets, postResponse])
      })
  }


  return (
    <div className="app-container">
      <Header />
      <Registry planets={planets} handleAddPlanet={handleAddPlanet} />
    </div>
  );
}

export default App;
