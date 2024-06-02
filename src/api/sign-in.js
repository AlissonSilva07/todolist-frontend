import { api } from '../lib/axios'

export async function signIn({ email, password }) {
  const { data } = await api.post('/login', { email, password })

  return data
}
