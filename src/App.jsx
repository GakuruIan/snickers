import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Features from './Components/Features/Features'
import Row from './Components/Row/Row'

import Icecreambanner from './assets/ice-banner.jpg';

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Features/>
      <Row Image={Icecreambanner}  text="dummy text"/>
    </>
  )
}

export default App
