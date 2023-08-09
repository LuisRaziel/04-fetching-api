import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import './App.css'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Random Cat Facts</h1>
      <section>
        <button onClick={handleClick}>Get new fact </button>
      </section>
      <article>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={`${imageUrl}`}
            alt={`Image extracted of the three first words ${fact}`}
          />
        )}
      </article>
    </main>
  )
}
