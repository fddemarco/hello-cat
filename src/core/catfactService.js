const CATFACT_ENDPOINT = 'https://catfact.ninja/fact'

function fetchRandomFact () {
  return fetch(CATFACT_ENDPOINT)
    .then(response => response.json())
    .then(data => data.fact)
}

export default fetchRandomFact
