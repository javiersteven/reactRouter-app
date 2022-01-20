import { Outlet } from 'react-router-dom'

export default function Home () {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}><strong>Welcome to the website!</strong></h2>
      <Outlet />
    </>
  )
}
