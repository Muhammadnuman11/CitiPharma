import React from 'react'
import { useAuth } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const [auth, setAuth] = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null
    })
    localStorage.removeItem("auth")
    navigate("/")
  }

  return (
    <>
      <h1>Dashboard</h1>
      <p>{JSON.stringify(auth)}</p>
      <button className='btn btn-primary' onClick={handleLogout}>Logout</button>
    </>
  )
}
