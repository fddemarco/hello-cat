import { useState } from 'react'

export function App () {
  const [fact, useFact] = useState('Lorem, ipsum dolor sit amet consectetur adipisicing elit.')
  return (
    <main>
      <h1>Hello Cat!</h1>
      <p>{fact}</p>
    </main>
  )
}
