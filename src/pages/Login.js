import BottomNav from "../components/BottomNav"
import Footer from "../components/Footer"
import LoginCard from "../components/LoginCard"
import Navbar from "../components/Navbar/Navbar"

function Login() {
  return (
    <div className="bg-[#F4F7F8]">
        <Navbar />
        <LoginCard />
        <Footer />
        <BottomNav />
    </div>
  )
}

export default Login