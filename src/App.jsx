import { useState } from 'react'
import './App.css'
import FirstComponent from './FirstComponent'
import MainPage from './MainPage'
import Counter from './counter.jsx'
import Calculator from './Calculator.jsx'
import MessageCard from './MessageCard.jsx'
import UserProfile from './UserProfile.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstComponent />
      <MainPage />

      <h2>Counter App</h2>
      <Counter />

      <h2>Calculator App</h2>
      <Calculator />

      <h2>Message Cards</h2>

      <MessageCard
        title="Welcome"
        message="Welcome to learning React components and props."
      />

      <MessageCard
        title="Reminder"
        message="Reuse components to keep your code clean."
      />

      <MessageCard
        title="Tip"
        message="Props help pass data from parent to child components."
      />
      <UserProfile />
    </>
  )
}

export default App
