import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  // cilBell,
  // cilCalculator,
  cilUser,
  cilBurger,
  // cilChartPie,
  // cilCursor,
  // cilDescription,
  // cilDrop,
  // cilNotes,
  // cilPencil,
  // cilPuzzle,
  cilSpeedometer,
  cilCart,
  cilStar,
  cilWatch,
  cilHome,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    to: '/home',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavTitle,
    name: 'SHOP',
  },
  {
    component: CNavGroup,
    name: 'CANTEEN',
    to: '/shop',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'DRINKS',
        to: '/shop/drinks',
      },
      {
        component: CNavItem,
        name: 'ICE CREAM',
        to: '/shop/icecream',
      },
      {
        component: CNavItem,
        name: 'MENU',
        to: '/shop/menu',
      },
      {
        component: CNavItem,
        name: 'FOOD',
        to: '/shop/food',
      },
      {
        component: CNavItem,
        name: 'SHOP',
        to: '/shop',
      },
      {
        component: CNavItem,
        name: 'ORDERS',
        to: '/shop/order',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'STAF',
    to: '/staf',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Details',
        to: '/staf/details',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'FAVORITES',
    to: '/staf',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'FAST FOOD',
    to: '/fastfood',
    icon: <CIcon icon={cilBurger} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'CART',
    to: '/cart',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'For notifications',
    },
  },
  {
    component: CNavItem,
    name: 'OFFERS',
    to: '/offers',
    icon: <CIcon icon={cilWatch} customClassName="nav-icon" />,
    badge: {
      color: 'danger',
      text: 'LIMITED',
    },
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  // {
  //   component: CNavItem,
  //   name: 'Docs',
  //   href: 'https://coreui.io/react/docs/templates/installation/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
]

export default _nav
