import { useState } from 'react'
import './App.css'

import FirstComponent from './FirstComponent'
import MainPage from './MainPage'
import Counter from './counter.jsx'
import Calculator from './Calculator.jsx'
import MessageCard from './MessageCard.jsx'
import UserProfile from './UserProfile.jsx'
import UserData from './UserData.jsx'
import CounterWithAlert from './CounterWithAlert.jsx'
import ColorToggle from './ColorToggle.jsx'

import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import VideoPlayerMulti from './VideoPlayerMulti.jsx'
import Component1 from './PropDrilling/Component1.jsx'
import Component1 from './components/Component3.jsx'
import Todos from './components/Todos.jsx'

function App() {

  const [count, setCount] = useState(0)


  const [status, setStatus] = useState(false)

  const toggleStatus = () => {
    setStatus(prev => !prev)
  }

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
      <UserData />
      <CounterWithAlert />

      
      <h2>Status Toggle</h2>
      <button onClick={toggleStatus}>Toggle Status</button>
      {status ? <ComponentA /> : <ComponentB />}

    
      <h2>Color Toggle</h2>
      <ColorToggle />
      <VideoPlayerMulti />
      <Component1 />
      <h1>Context API – Props Drilling Solution</h1>
      <Component1 />
      <h1>Context API Todo App</h1>
      <Todos />
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
