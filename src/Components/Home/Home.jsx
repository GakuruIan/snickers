import React from 'react'
import Banner from '../Banner/Banner'
import Features from '../Features/Features'
import Footer from '../Footer/Footer'
import Row from '../Row/Row'
import Favorites from '../Favorites/Favorites'
import Ad from '../Ad/Ad'
import Cta from '../CTA/Cta'

import banner from '../../assets/main-banner.jpg'
const Home = () => {
  return (
    <>
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

export default Home