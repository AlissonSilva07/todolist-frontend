export function SignIn() {
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
            method="POST"
            className="needs-validation"
            noValidate=""
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
                name="email"
                value=""
                required
                autoFocus
              />

              <div className="invalid-feedback">E-mail está inválido</div>
            </div>

            <div className="mb-3">
              <label className="text-muted" htmlFor="password">
                Senha
              </label>

              <input
                id="password"
                type="password"
                className="form-control"
                name="password"
                required
              />

              <div className="invalid-feedback">Password is required</div>
            </div>

            <button type="submit" className="btn btn-primary ms-auto">
              Entrar
            </button>
          </form>
        </div>

        <div className="card-footer py-3 border-0">
          <div className="text-center">
            Não tem uma conta?{' '}
            <a href="register.html" className="text-dark">
              Crie uma
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
