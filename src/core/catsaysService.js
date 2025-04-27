const CATSAYS_ENDPOINT = 'https://cataas.com/cat/says'

function fetchCatSays (fact) {
  const firstWord = fact.split(' ', 3).join(' ')
  const encodedFirstWord = encodeURIComponent(firstWord)
  return fetch(`${CATSAYS_ENDPOINT}/${encodedFirstWord}`)
}

export default fetchCatSays
