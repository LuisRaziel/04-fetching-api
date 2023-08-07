import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/${h}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // useEffect(() => {
  //   fetch(CAT_ENDPOINT_FACT)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const { fact } = data
  //       setFact(fact)
  //       const threeFirstWords = fact.split(' ', 3).join(' ')
  //       fetch(
  //         `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
  //       )
  //         .then((response) => response.json())
  //         .then((data) => {
  //           const { url } = data
  //           setImageUrl(url)
  //         })
  //     })
  // }, [])

  useEffect(() => {
    fetch(CAT_ENDPOINT_FACT)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then((response) => response.json())
      .then((data) => {
        const { url } = data
        setImageUrl(url)
      })
  }, [fact])
  return (
    <main>
      <h1>Random Cat Facts</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
            alt={`Image extracted of the three first words ${fact}`}
          />
        )}
      </section>
    </main>
  )
}
