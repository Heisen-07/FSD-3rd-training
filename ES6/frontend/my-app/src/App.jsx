import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Change from './components/ChangeState'
function App() {
  return (
    <div>
      <Navbar />
      <Change />
      <br />
      <Card name="fupak" age="3"/>
      <br />
      <Card name="lupak" age="3"/>
      <br />
      <Card name="nagar" age="70"/>
    </div>
  )
}

export default App
