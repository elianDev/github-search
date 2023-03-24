import { useState } from 'react'
import './App.scss'
import { Card } from './components/card'
import { Input } from './components/input'
import './styles/variables/index.scss'

function App() {
  return (
    <div className='container'>
      <Input/>
      <Card/>
    </div>
  )
}

export default App
