import React from 'react'
import Navbar from '@/../components/Navbar'
import RecentPost from '../RecentPost'
import FeaturedPost from '../FeaturedPost'
import Footer from '@/../components/Footer'
import PopularCourse from '../PopularCourse'
import OurTeam from '../OurTeam'
import Testmonials from '../Testmonials'
import MobileHeader from '@/../components/MobileHeader'

export default function Home() {
  return (
    <div style={{width: "100%"}}>
      <MobileHeader />
      <Navbar />
      <RecentPost />
      <PopularCourse />
      <FeaturedPost />
      <Testmonials />
      <OurTeam/>
      <Footer />
    </div>
  )
}
