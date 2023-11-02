import './App.css'
import { Navbar } from './components/Navbar'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { UserProvider } from './context/user'

type User = {
  username: string,
}

const App = () => {

  return (
    <UserProvider>
      <main>
        <Navbar />
        <Main />
        <Footer />
      </main>
    </UserProvider>
  )
}

export default App
