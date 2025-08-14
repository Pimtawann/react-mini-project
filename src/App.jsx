import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormScreen from './component/FormScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormScreen/>
    </>
  )
}

export default App
