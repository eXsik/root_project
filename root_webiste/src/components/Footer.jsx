import React from 'react'
import { facebook, instagram, logo_white } from '../assets'
import styles, { layout } from '../style'

const Footer = () => {
  return (
    <section id="Footer" className={`${layout.section2} text-white xl:px-0 sm:px-16 px-3 !py-4 !pt-10`}>
      <div className="flex justify-center">
          <img src={logo_white} className="w-[240px]" alt="logo" />
      </div>
      <div className="flex justify-center my-4">
        <div className='flex justify-between items-center mt-4'>
          <a href="http://www.facebook.com" rel='nofollow' target='_blank'>
           <img className="w-8 h-8 mr-4" src={facebook} alt="ikonka facebooka" />
          </a>
          <a href="http://www.instagram.com" rel='nofollow' target='_blank'>
            <img className="w-8 h-8 " src={instagram} alt="ikonka instagrama" />
          </a>
         
        </div>
      </div>
      <div className='mt-4 text-center'>
        <p className={`${styles.paragraph} !text-[13px]`}>Copyright @2023 ROOT | Wykonanie: <a href="mailto:qba.skupinski@gmail.com">qba.skupinski@gmail.com</a></p>
      </div>
  </section>  
  )
}

export default Footer