import { useUser } from "../context/user"

export const Navbar = () => {

  const { user, logout } = useUser()

  return <p>Navbar {user?.username} <button onClick={logout}>Logout</button> </p>
}