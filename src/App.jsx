import { useState } from 'react'
import './styles/App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Resume from './components/Resume'
import Example from './components/Editor/Editor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Sidebar/>
      <Example/>
      <Resume/>
    </div>
  )
}

export default App
