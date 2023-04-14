import { useState, useEffect } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'
import Home from './components/Home'
import SingleDog from './components/SingleDog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/:index" element={<SingleDog />}></Route>
        </Routes>
      </Router>

    </>
  )
}

export default App