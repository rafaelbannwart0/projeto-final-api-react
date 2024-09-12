import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [funfact, setFunfact] = useState("")

  const getPokemonData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/funcats`, {
        method: 'GET', // or 'GET', 'PUT', 'DELETE', etc.
        headers: {
          'Content-Type': 'application/json',
          "Authorization": "Bearer 3|r1WLhRkGxbJ5IsnAHRqtND5qiSGgBYwQjKDtznGi45ad661c"
        },
      });
      
      const data = await response.json();
      const item = data.data.funcats[Math.floor(Math.random() * data.data.funcats.length)]
      setFunfact(item.fun)
      console.log("data", data.data.funcats)
    } catch (error) {
      console.error("Erro ao buscar o Pokémon:", error);
    }
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
     <h1 style={{ marginTop: '20px', fontSize: '18px', color: '#333' }}>{funfact}</h1>
      <button 
        onClick={getPokemonData} 
        style={{
          backgroundColor: '#6200ea', 
          color: 'white', 
          border: 'none',
          padding: '10px 20px', 
          borderRadius: '8px', 
          display: 'flex', 
          alignItems: 'center', 
          cursor: 'pointer', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
          transition: 'background-color 0.3s, transform 0.3s', 
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#3700b3'} 
        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#6200ea'} 
        onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'} 
        onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'} 
      >
        Mostrar Fato de Gato
      </button>
    </div>
  )
}

export default App