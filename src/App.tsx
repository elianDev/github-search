import { useState } from 'react'
import './App.scss'
import { Card } from './components/card'
import { Input } from './components/input'
import MyContext from './context/MyContext'
import './styles/variables/index.scss'

function App() {

  interface Prop {
    name: string
  }

  const [name, setName] = useState<string>('elias')

  return (
    <div className='container'>
      <MyContext.Provider value={{name, setName}}>
        <Input/>
        <Card/>
      </MyContext.Provider>
    </div>
  )
}

export default App
