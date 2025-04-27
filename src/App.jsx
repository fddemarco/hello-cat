import { useEffect, useState } from 'react'

import fetchRandomFact from './core/catfactService'
import fetchCatSays from './core/catsaysService'

export function App () {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()

  useEffect(() => {
    fetchRandomFact()
      .then(newFact => setFact(newFact))
  }, [])
  useEffect(() => {
    if (fact) {
      fetchCatSays(fact)
        .then(res => res.blob())
        .then(blob => URL.createObjectURL(blob))
        .then(url => setImageURL(url))
    }
  }, [fact])

  return (
    <main>
      <h1>Hello Cat!</h1>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt='Cat Saying Random Fact' />}
    </main>
  )
}
