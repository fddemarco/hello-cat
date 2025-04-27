import { useEffect, useState } from 'react'

import fetchRandomFact from './core/catfactService'

export function App () {
  const [fact, setFact] = useState()
  useEffect(() => {
    fetchRandomFact(setFact)
  }, [])

  return (
    <main>
      <h1>Hello Cat!</h1>
      {fact && <p>{fact}</p>}
    </main>
  )
}
