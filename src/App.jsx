import { useState } from 'react'
import './App.css'
import FirstComponent from './FirstComponent'
import MainPage from './MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstComponent />
      <MainPage />
    </>
  )
}

export default App
