import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/app/home'
import { SignIn } from './pages/auth/sign-in'
import { AppLayout } from './pages/layouts/app'
import { AuthLayout } from './pages/layouts/auth'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/',
        element: <SignIn />,
      },
    ],
  },

  {
    path: '/home',
    element: <AppLayout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
    ],
  },
])
