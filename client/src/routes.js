import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Home = React.lazy(() => import('./views/Home/home'))
const Details = React.lazy(() => import('./views/staff/details'))

//shop
const Drink = React.lazy(() => import('./views/shop/drinks'))
const Icecream = React.lazy(() => import('./views/shop/ice'))
const Menu = React.lazy(() => import('./views/shop/menu'))
const Food = React.lazy(() => import('./views/shop/food'))
//fast food
const Fastfood = React.lazy(() => import('./views/shop/fastf'))
const routes = [
  /**
  |--------------------------------------------------|
  |               DASHBOARD                          |
  |--------------------------------------------------|
  */
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  /**
  |--------------------------------------------------|
  |                  HOME                            |
  |--------------------------------------------------|
  */
  { path: '/home', name: '', element: Home },
  /**
  |--------------------------------------------------|
  |                 STAFF                            |
  |--------------------------------------------------|
  */
  { path: '/staf/details', name: 'STAFF', element: Details },
  /**
  |--------------------------------------------------|
  |                  SHOP                            |
  |--------------------------------------------------|
  */
  { path: '/shop/drinks', name: 'DRINKS', element: Drink },
  { path: '/shop/menu', name: 'DRINKS', element: Menu },
  { path: '/shop/icecream', name: 'ICE CREAME DESERTS', element: Icecream },
  { path: '/shop/food', name: 'Food', element: Food },
  /**
  |--------------------------------------------------|
  |  FAST FOOD                                       |
  |--------------------------------------------------|
  */
  { path: '/fastfood', name: 'FASTFOOD', element: Fastfood },
]

export default routes
