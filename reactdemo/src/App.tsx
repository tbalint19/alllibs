import { useState } from 'react'
import './App.css'
import { Fruit } from './components/Fruit'

type Fruit = {
  name: string,
  color: string,
  isAvailable: boolean,
}

const App = () => {

  // App state
  const [ name, setName ] = useState("John")

  // Mutation
  const changeName = () => {
    // computation...
    // name = "Jim"
    setName("Jim")
  }

  const fruits: Fruit[] = [
    { name: "alma", color: "red", isAvailable: true },
    { name: "barack", color: "peach", isAvailable: false },
    { name: "narancs", color: "orange", isAvailable: true },
  ]

  return (
    <div>
      <h1>Hello {name} from react</h1>
      <ul>
        {
          fruits.map(fruit => (
            fruit.isAvailable && <Fruit fruit={fruit} />
          ))
        }
      </ul>
      <button onClick={changeName}>Change</button>
    </div>
  )
}

export default App
