import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Spinner } from '~shared/shadcn/components/ui'

const DashboardPageLazy = lazy(() => import('~pages/dashboard/ui'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPageLazy />,
  },
  {
    path: '*',
    element: <div>404 Not Found</div>,
  },
])

export const RouteProvider = () => {
  return (
    <main>
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </main>
  )
}
