import { useState, useEffect } from 'react'
import './App.css'


function App() {

  const [query, setQuery] = useState("")
  const [prodotti, setProdotti] = useState([])
  // console.log(prodotti);




  useEffect(() => {
    fetch(`http://localhost:5000/products?search=${query}`)
      .then(res => res.json())
      .then(data => setProdotti(data))
      .catch(err => {
        console.error('Errore nella chiamata API:', err)
        setProdotti([])
      })
  }, [query])

  console.log(prodotti);

  return (
    <>
      <div>

        <input type="text"
          placeholder='Cerca il tuo prodotto..'
          value={query}
          onChange={e => setQuery(e.target.value)}

        />

        <div className='container'>
          {query && prodotti.length > 0 && (
            <div >
              {prodotti.map(product => (
                <p className='card' key={product.id}>{product.name}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
