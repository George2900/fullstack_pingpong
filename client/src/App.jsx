import { useState } from 'react'

export default function App() {
  const [msg, setMsg] = useState('...')

  const ping = async () => {
    const res = await fetch('/api/ping')  // запрос идёт на Flask
    const text = await res.text()
    setMsg(text)
  }

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1>Ping-Pong App</h1>
      <button onClick={ping}>Ping API</button>
      <p>Response: {msg}</p>
    </div>
  )
}