/* eslint-disable array-callback-return */
import './App.css'
import { Routes, Route } from 'react-router-dom'

// Components
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

// Routes
import Home from './routes/home.jsx'
import Invoice from './routes/invoice.jsx'
import Invoices from './routes/invoices.jsx'

// Components
import List from './components/list.jsx'
import Description from './components/description.jsx'
import More from './components/more.jsx'
import NotFound from './components/notFound.jsx'

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
            <Route index element={<main>Index Route</main>} />
            <Route path=':numberId' element={<Invoice />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
