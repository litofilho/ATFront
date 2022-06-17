import { useState } from 'react'
import globalStyles from './utils/styles/global.styles'
import Login from "./presentation/views/login/login"

function App() {
  globalStyles()
  const [count, setCount] = useState(0)

  return (
    <Login />
  )
}

export default App
