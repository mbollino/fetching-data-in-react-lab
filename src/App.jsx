import { useState, useEffect } from 'react'
import { index } from './services/starshipService'
import './App.css'
import StarshipList from './components/StarshipList/StarshipList';
import StarshipSearch from './components/StarshipSearch/StarshipSearch';

const App = () => {

  const [starshipsData, setStarshipsData] = useState([])
  const [displayedStarships, setDisplayedStarships] = useState([])

  useEffect(() => {
    const fetchStarships = async () => {
      const data = await index()
      setStarshipsData(data)
      setDisplayedStarships(data)
    }
    fetchStarships()
  }, [])

  if (!displayedStarships) {
    return <h1>Loading...</h1>
  }

  const search = (searchTerm) => {
    const filteredStarships = starshipsData.filter(starship => {
      return starship.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setDisplayedStarships(filteredStarships)
  }

  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch search={search} numberOfStarships={displayedStarships.length} />
      <StarshipList displayedStarships={displayedStarships} />
    </main>
  );
}

export default App
