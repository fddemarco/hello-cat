const CATSAYS_ENDPOINT = 'https://cataas.com/cat/says'

async function fetchCatSays (fact) {
  const firstWord = fact.split(' ', 3).join(' ')
  const encodedFirstWord = encodeURIComponent(firstWord)
  const res = await fetch(`${CATSAYS_ENDPOINT}/${encodedFirstWord}`)
    .then(response => response)
  return res
}

export default fetchCatSays
