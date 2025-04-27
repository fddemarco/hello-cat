const CATSAYS_ENDPOINT = 'https://cataas.com/cat/says'

function fetchCatSays (fact) {
  const firstWord = fact.split(' ', 3).join(' ')
  const encodedFirstWord = encodeURIComponent(firstWord)
  return fetch(`${CATSAYS_ENDPOINT}/${encodedFirstWord}`)
    .then(res => res.blob())
    .then(blob => URL.createObjectURL(blob))
}

export default fetchCatSays
