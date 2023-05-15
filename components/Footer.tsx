import React from 'react'
// import Image from 'next/image'
import {RiFacebookCircleFill, RiInstagramFill, RiYoutubeFill, RiGithubFill, RiStackOverflowFill, RiPinterestFill, RiWhatsappFill, RiCopyrightFill} from 'react-icons/ri'
import {AiFillTwitterCircle} from 'react-icons/ai'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <div className="footerConatainer">
        <div className="footerBox">
          <div className="footerHeader d-flex align-items-center bg-secondary bg-gradient justify-between py-2 px-4">
            <div className="footerHeadContents-left">
              <h1 className='fs-6 m-0 font-bold text-white cursor-context-menu'>AIO is a famous site to complete your daily requirement</h1>
            </div>
            <div className="footerHeadContents-right">
              <div className="socialIcon d-flex align-items-center">
                <i className='cursor-pointer py-2 rounded-circle fb' title='Faceook' style={{width: "50px", height: "50px"}}><RiFacebookCircleFill /></i>
                <i className='cursor-pointer py-2 rounded-circle tr' title='Twitter' style={{width: "50px", height: "50px"}}><AiFillTwitterCircle /></i>
                <i className='cursor-pointer py-2 rounded-circle ig' title='Instagram' style={{width: "50px", height: "50px"}}><RiInstagramFill /></i>
                <i className='cursor-pointer py-2 rounded-circle yt' title='Youtube' style={{width: "50px", height: "50px"}}><RiYoutubeFill /></i>
                <i className='cursor-pointer py-2 rounded-circle gh' title='Github' style={{width: "50px", height: "50px"}}><RiGithubFill /></i>
                <i className='cursor-pointer py-2 rounded-circle so' title='Stack Overflow' style={{width: "50px", height: "50px"}}><RiStackOverflowFill /></i>
                <i className='cursor-pointer py-2 rounded-circle pr' title='Piterest' style={{width: "50px", height: "50px"}}><RiPinterestFill /></i>
                <i className='cursor-pointer py-2 rounded-circle wa' title='Whatsapp' style={{width: "50px", height: "50px"}}><RiWhatsappFill /></i>
              </div>
            </div>
          </div>
          {/* <div className="footerBody"></div> */}
          <div className="footerEnd bg-dark">
            <h1 className='text-white fs-6 d-flex align-items-center justify-content-center m-0' style={{width: "100%"}}><RiCopyrightFill/><p className='m-0'>ALL RIGHT RESERVED BY <Link href="/">AIO</Link></p></h1>
          </div>
        </div>
      </div>
    </>
  )
}
