import { useUser } from "../context/user"

export const Main = () => {

  const { user } = useUser()

  return <p>Main {user?.username}</p>
}