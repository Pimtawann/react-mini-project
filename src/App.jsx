import { useState } from 'react'
import './App.css'
import FormScreen from './component/FormScreen'
import SummaryScreen from './component/SummaryScreen';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);

  return (
    <>
      {isSubmitted ? 
      (<SummaryScreen formData={formData} onRestart={() => setIsSubmitted(false)} />) : 
      (<FormScreen onSubmit={(data) => {setFormData(data); setIsSubmitted(true);}} />)}
    </>
  )
}

export default App