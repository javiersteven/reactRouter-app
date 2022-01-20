/* eslint-disable array-callback-return */
import './App.css'
import { Routes, Route } from 'react-router-dom'

// Components
import Header from './components/header.jsx'

// Routes
import Home from './routes/home.jsx'
import List from './routes/list.jsx'
import Description from './routes/description.jsx'
import More from './routes/more.jsx'
import Invoices from './routes/invoices.jsx'
import Invoice from './routes/invoice.jsx'
import NotFound from './routes/notFound.jsx'

function App () {
  return (
    <div className='App'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/list' element={<List />} />
            <Route path='/description' element={<Description />} />
            <Route path='/more' element={<More />} />
          </Route>
          <Route path='/invoices' element={<Invoices />}>
            <Route path=':numberId' element={<Invoice />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
