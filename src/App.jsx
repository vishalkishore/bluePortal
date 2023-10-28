import { useState } from 'react'
import Login from './Login/Login'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Login></Login>
    </>
  )
}


