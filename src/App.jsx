import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Features from './Components/Features/Features'
import Row from './Components/Row/Row'
import Ad from './Components/Ad/Ad'

import banner from './assets/main-banner.jpg';
import Favorites from './Components/Favorites/Favorites'
import Cta from './Components/CTA/Cta'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Features/>
      <Ad/>
      <Row Image={banner}/>
      <Favorites/>
      <Cta/>
      <Footer/>
    </>
  )
}

export default App
