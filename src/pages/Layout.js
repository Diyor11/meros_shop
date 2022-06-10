import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import BottomNav from '../components/BottomNav'

export default function Layout({children}) {
  return (
    <div>
        <Navbar />
            {children}
        <Footer />
        <BottomNav />
    </div>
  )
}
