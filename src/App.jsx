import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* Enlace básico */}
        <a href="https://example.com">Enlace simple</a>

        {/* Enlace que abre en nueva pestaña */}
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          Abrir en nueva pestaña
        </a>

        {/* Enlace con estilos inline */}
        <a 
          href="https://example.com" 
          style={{ color: 'blue', textDecoration: 'none', margin: '10px' }}
        >
          Enlace con estilo
        </a>

        {/* Enlace con evento onClick */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            alert('¡Enlace clickeado!');
          }}
        >
          Enlace con evento click
        </a>

        {/* Enlace con imagen */}
        <a href="https://react.dev">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        {/* Contador original */}
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
