/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/shared/Navbar'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Home from './components/Home'
import Jobs from './components/jobs'
import About from './components/footer/company/about'
import Browser from './components/Browser'
import Profile from './components/profile'
import Jobdescription from './components/Jobdescription'

const appRouter = createBrowserRouter([
  {
    path: '/jobs',
    element: <Jobs />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  { path: '/about', element: <About /> },
  {
    path: '/browser',
    element: <Browser />,
  },
  {
    path: '/Profile',
    element: <Profile />,
  },
  {
    path: '/description/:id',
    element: <Jobdescription />,
  },
])

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
