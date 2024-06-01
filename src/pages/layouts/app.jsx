import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  )
}
