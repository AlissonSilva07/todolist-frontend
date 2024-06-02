import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { signIn } from '../../api/sign-in'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  async function onSubmit(e) {
    e.preventDefault()

    try {
      console.log(await authenticate({ email, password }))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="text-center my-5">
        <img
          src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
          alt="logo"
          width="100"
        />
      </div>

      <div className="card shadow-lg">
        <div className="card-body p-5">
          <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>

          <form
            onSubmit={onSubmit}
            className="needs-validation"
            noValidate
            autoComplete="off"
          >
            <div className="mb-3">
              <label className="mb-2 text-muted" htmlFor="email">
                E-Mail
              </label>

              <input
                id="email"
                type="email"
                className="form-control"
                value={email}
                onChange={handleEmail}
                required
                autoFocus
              />
            </div>

            <div className="mb-3">
              <label className="text-muted" htmlFor="password">
                Senha
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={handlePassword}
                className="form-control"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary ms-auto">
              Entrar
            </button>
          </form>
        </div>

        <div className="card-footer py-3 border-0">
          <div className="text-center">
            Não tem uma conta?{' '}
            <Link to="/signup" className="text-dark">
              Crie uma
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
