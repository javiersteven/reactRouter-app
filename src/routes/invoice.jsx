import { useParams } from 'react-router-dom'
import { getInvoice } from '../data.js'

export default function Invoice () {
  const params = useParams()
  const invoice = getInvoice(parseInt(params.numberId, 10))
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{invoice.name}</h2>
      <p>{invoice.amount}</p>
      <p>{invoice.due}</p>
    </div>
  )
}
