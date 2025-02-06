import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <>
      <h1>Nested Comments</h1>
      <div>
        <input 
          type='text'
          value={input}
          placeholder='Your comments...'
          className='input-box'
          onChange={handleInputChange}
          />
      </div>
      {/* handle button */}
      <div>
        
      </div>
    </>
  )
}

export default App
