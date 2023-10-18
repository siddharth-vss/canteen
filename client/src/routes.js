import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Home = React.lazy(() => import('./views/Home/home'))

const routes = [
  { path: '*', name: '', element: Home },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/home', name: '', element: Home },
]

export default routes
