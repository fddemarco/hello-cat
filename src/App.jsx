import { useEffect, useState } from 'react'

const CATFACT_ENDPOINT = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState()
  useEffect(() => {
    fetch(CATFACT_ENDPOINT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])
  return (
    <main>
      <h1>Hello Cat!</h1>
      {fact && <p>{fact}</p>}
    </main>
  )
}
