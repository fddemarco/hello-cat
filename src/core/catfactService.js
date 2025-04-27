const CATFACT_ENDPOINT = 'https://catfact.ninja/fact'

function fetchRandomFact (callback) {
  (
    fetch(CATFACT_ENDPOINT)
      .then(response => response.json())
      .then(data => data.fact)
      .then(fact => callback(fact))
  )
}

export default fetchRandomFact
