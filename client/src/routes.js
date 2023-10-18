import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Home = React.lazy(() => import('./views/Home/home'))
const Details = React.lazy(() => import('./views/staff/details'))

const routes = [
  { path: '*', name: '', element: Home },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/home', name: '', element: Home },
  { path: '/staf/details', name: 'DETAILS', element: Details },
]

export default routes
