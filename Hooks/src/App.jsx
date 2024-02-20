import ExemploUseEffect from '../components/ExemploUseEffect'
import ExemploUseState from '../components/ExemploUseState'
import { useState } from 'react'
import './App.css'

function App() {

  const [isVisible, setIsVisible] = useState("true")

  return (
    <>
      <ExemploUseState/>

      {isVisible && <ExemploUseEffect/>}
      <button onClick={() => setIsVisible(!isVisible)}>Sumir ou Aparecer</button>
    </>
  )
}

export default App
