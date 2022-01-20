// Header component
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to='/'><h1>⚛️ React Router 6 Practice</h1></Link>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/list'>List</Link></li>
          <li><Link to='/description'>Description</Link></li>
          <li><Link to='/more'>More</Link></li>
          <li><Link to='/invoices'>Invoices</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
