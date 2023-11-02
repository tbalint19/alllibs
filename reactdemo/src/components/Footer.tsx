import { useUser } from "../context/user"

export const Footer = () => {

  const { user } = useUser()

  return <p>Footer {user?.username}</p>
}