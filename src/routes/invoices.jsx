import { getData } from '../data.js'
import { Link, Outlet } from 'react-router-dom'

const styles = { display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }

const Invoices = () => {
  const invoices = getData()
  return (
    <div style={styles}>
      <ol>
        {
          invoices.map((invoice) => {
            return (
              <li key={invoice.number}>
                <Link to={`/invoices/${invoice.number}`}>{invoice.name}</Link>
              </li>
            )
          })
        }
      </ol>
      <Outlet />
    </div>
  )
}

export default Invoices
