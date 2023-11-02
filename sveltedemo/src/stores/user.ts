import { derived, writable } from "svelte/store";

type User = { username: string }

const _loggedInUser = writable<User | null>({ username: "John" })

export const loggedInUser = derived(_loggedInUser, (value) => value)

export const logout = () => {
  _loggedInUser.set(null)
}

