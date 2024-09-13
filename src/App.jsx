import { useEffect, useState } from 'react'
import { Cat } from 'lucide-react'
import './App.css'

function App() {
  const [funfact, setFunfact] = useState("")

  const getPokemonData = async () => {
    try {
      const response = await fetch(`https://7e3b-2804-1b3-6641-8101-f238-c8dd-a13e-7d4f.ngrok-free.app/api/cats`, {
        method: 'GET', // or 'GET', 'PUT', 'DELETE', etc.
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': undefined,
          'Access-Control-Allow-Origin': '*'
        },
      });
      
      const data = await response.json();
      const item = data[Math.floor(Math.random() * data.length)]
      setFunfact(item.fact)
      console.log("data", data)
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
        onClick={() => getPokemonData} 
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
        <Cat style={{ marginRight: '8px' }} />
        Mostrar Fato de Gato
      </button>
    </div>
  )
}

export default App
