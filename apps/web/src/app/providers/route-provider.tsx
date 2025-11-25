import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { InitialPage } from '~pages/initial'
import { Spinner } from '~shared/shadcn/components/ui'

const DashboardPageLazy = lazy(() => import('~pages/dashboard/ui'))
const AuthCallbackPageLazy = lazy(() => import('~pages/auth-callback/ui'))

export const anonymousRouter = createBrowserRouter([
  {
    path: '/auth/callback/',
    element: <AuthCallbackPageLazy />,
  },
  {
    path: '*',
    element: <InitialPage />,
  },
])

export const authorizedRouter = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPageLazy />,
  },
])

interface IProps {
  router: ReturnType<typeof createBrowserRouter>
}

export const RouteProvider = ({ router }: IProps) => {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
