import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { signUp } from '../../api/sign-up'

export function SignUp() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { mutateAsync: register, isPending } = useMutation({
    mutationFn: signUp,
  })

  function handleUsername(e) {
    setUsername(e.target.value)
  }

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  async function onSubmit(e) {
    e.preventDefault()

    try {
      await register({ username, email, password })
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
          <h1 className="fs-4 card-title fw-bold mb-4">Cadastre-se</h1>

          <form
            onSubmit={onSubmit}
            className="needs-validation"
            noValidate
            autoComplete="off"
          >
            <div className="mb-3">
              <label className="mb-2 text-muted" htmlFor="name">
                Nome
              </label>

              <input
                id="name"
                type="text"
                className="form-control"
                value={username}
                onChange={handleUsername}
                required
                autoFocus
              />
            </div>

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
              />
            </div>

            <div className="mb-3">
              <label className="text-muted" htmlFor="password">
                Senha
              </label>

              <input
                id="password"
                type="password"
                className="form-control"
                value={password}
                onChange={handlePassword}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary ms-auto"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  />

                  <span role="status">Cadastrando ...</span>
                </>
              ) : (
                'Cadastrar'
              )}
            </button>
          </form>
        </div>

        <div className="card-footer py-3 border-0">
          <div className="text-center">
            Já tem uma conta?{' '}
            <Link to="/" className="text-dark">
              Faça login
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
