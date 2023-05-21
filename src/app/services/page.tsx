'use client'
import React from 'react'
import Navbar from '@/../components/Navbar'
import Footer from '@/../components/Footer'
import MobileHeader from '@/../components/MobileHeader'
import ServicesCompo1 from '@/../components/ServicesCompo1'
import ServicesCompo2 from '@/../components/ServicesCompo2'
import certificatePic from '@/../public/images/certificate.svg'
import eduServucesPic from '@/../public/images/educationService.svg'
import csertificateBadgePic from '@/../public/images/certificatebadgePic.png'
import tipsForHealthPic from '@/../public/images/tipsForHealth.svg'
import doctorPredictPic from '@/../public/images/doctorsPredictions.svg'
import doctorsSertPic from '@/../public/images/doctorsSertPic.png'

export default function service() {
  return (
    <div>
      <Navbar />
      <MobileHeader />
      <div className="ourservicsBox">
        <div className="ourservicesContainer">
          <div className="ourServicesTitleLine">
            <h1>Our Services</h1>
          </div>
          <ServicesCompo1 headingline="Get Educated using AIO" aboutLine="AIO has emerged as a game-changer in the field of education, revolutionizing the way we learn, teach, and engage with educational content. Through personalized learning, enhanced accessibility, and optimized educational outcomes, AIO empowers minds by unlocking individual potential, breaking down barriers to education, and fostering inclusive and effective learning environments. As we move forward, it is crucial to embrace the possibilities offered by AIO while ensuring ethical considerations, maintaining human involvement, and continuously monitoring and adapting these technologies to serve the best interests of learners worldwide. With AIO, we have the opportunity to transform education into. AIO is an Private Company of Pakistan. Which providing the online services (e.g. Education, News, Blogging, Product Selling, Health caring etc...). AIO starting an Education services for pakistani people. AIO is giving lecture through face-to-face and online classes. For More about our courses and lecture read our documentation or contact with us." ImageUrl={eduServucesPic}/>
          <ServicesCompo2 headingline="Get Your Interested Skill " headingLinePart2="Certificate" headingLinePart3=" Using AIO" aboutLine="AIO (Artificial Intelligence Organization) is an advanced tool that allows individuals to obtain their desired skill certificates efficiently and conveniently. By leveraging the power of artificial intelligence, AIO streamlines the certification process, making it accessible to a wide range of learners. This cutting-edge platform utilizes natural language processing, machine learning algorithms, and vast knowledge repositories to assess the proficiency of individuals in various skills. Whether it's programming, data analysis, marketing, or any other field, AIO can accurately evaluate an individual's knowledge and provide them with a recognized skill certificate. The platform offers interactive learning modules, practice exercises, and personalized feedback to help individuals enhance their skills and achieve their certification goals. With AIO, obtaining an interested skill certificate becomes an engaging and rewarding experience, empowering individuals to showcase their expertise and pursue their professional aspirations." ImageUrl={certificatePic} sertImageUrl={csertificateBadgePic}/>
          <ServicesCompo1 headingline="Become Healthy & strong person using AIO fitness tips" aboutLine="Becoming a healthy and strong individual requires a holistic approach encompassing physical exercise, balanced nutrition, mental well-being, and lifestyle modifications. By following these AIO fitness tips, you can lay a solid foundation for your journey towards improved health and strength. Remember, small steps taken consistently can lead to significant transformations, both physically and mentally. Embrace the process, stay committed, and enjoy the rewards of a healthier, stronger you." ImageUrl={tipsForHealthPic}/>
          <ServicesCompo2 headingline="Get our Doctors Solution for your " headingLinePart2="Healthy Life " headingLinePart3="Using AIO" aboutLine="AIO's doctor's solution revolutionizes healthcare by offering individuals a comprehensive approach to maintaining a healthy life. With access to expert doctors, personalized care plans, advanced treatment options, and comprehensive health monitoring, AIO empowers individuals to lead a life of vitality and well-being. By harnessing the power of technology and expert medical guidance, AIO transforms the way we approach healthcare, ensuring that everyone can access the best medical services and make informed decisions about their health. Embrace the AIO doctor's solution and take control of your health today for a healthier and happier tomorrow." ImageUrl={doctorPredictPic} sertImageUrl={doctorsSertPic}/>
        </div>
      </div>
      <Footer />
    </div>
  )
}
