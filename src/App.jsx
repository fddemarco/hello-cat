import { useEffect, useState } from 'react'

const CATFACT_ENDPOINT = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState('Lorem, ipsum dolor sit amet consectetur adipisicing elit.')
  useEffect(() => {
    fetch(CATFACT_ENDPOINT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])
  return (
    <main>
      <h1>Hello Cat!</h1>
      <p>{fact}</p>
    </main>
  )
}
