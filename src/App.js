import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import Loader from './components/Loader/Loader'
import Footer from './components/Footer'
import Category from './pages/Category'
import Error from './pages/404'
import Layout from './pages/Layout'
import Login from './pages/Login'

const App = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // setTimeout(() => setLoading(false), 3000)
    window.addEventListener('load', () => setLoading(false))
  }, [])

  return (
    <>
      {
        loading === false ?
        <Router>
            <Routes>
              <Route path='/' element={<Layout><Home /></Layout>} />
              <Route path='/category/*' element={<Layout><Category /></Layout>} />
              <Route path='/users/login' element={<><Login /></>} />
              <Route path='*' element={<Error />}/>
            </Routes>
        </Router>
        :
        <Loader />
      }
    </>
  )
}

export default App