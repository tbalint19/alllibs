import { useState, createContext, useContext, type ReactNode } from 'react'

type User = {
  username: string
}

const UserContext = createContext<{ user: User | null, logout: () => void }>({ user: null, logout: () => {} })

const UserProvider = ({children}: { children: ReactNode}) => {

  const [user, setUser] = useState<User | null>({username: "John"  })

  const logout = () => setUser(null)

  return (
    <UserContext.Provider value={{ user, logout }}>
      {children}
    </UserContext.Provider>
  )
}

function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export {UserProvider, useUser}