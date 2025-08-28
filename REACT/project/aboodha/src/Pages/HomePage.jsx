import NavBar from '../Component/Home/Home'
import OpenPage from '../Component/Openpage/OpenPage'
import Inform from '../Component/Inform/Inform'
import Underbanner from '../Component/Underbanner/Underbanner'
import Footer from '../Component/Footer/Footer'
import Location from '../Component/Location/LocationPage'
import RealNav from '../Component/RealNav/RealNav'

function HomePage() {
  
  return (
    <div>
      <RealNav />
      <NavBar />
      <Inform />
      <OpenPage />
      <Underbanner />
      <Location />
      <Footer  />
    </div>
  )
}

export default HomePage