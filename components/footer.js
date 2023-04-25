import Link from 'next/link'
import React from 'react'
import { ImFacebook, ImTwitter, ImYoutube } from 'react-icons/im'
import Newslatter from './_child/newslatter'

export default function Footer() {
  const bg={
    backgroundImage:"url('/images/footer.png')",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"bottom left",
   
  }
  return (
    <footer style={bg} className='bg-gray-50'>
      <Newslatter />
        <div className='container flex mx-auto py-12 justify-center'>
            <div className='py-5'>
              <div className='flex gap-6 justify-center'>
                        <Link href="/"><ImFacebook className='text-[#888888]'  /></Link>
                        <Link href="/"><ImTwitter color='#888888' /></Link>
                        <Link href="/"><ImYoutube color='#888888' /></Link>
              </div>
                <p className='py-5 text-gray-400'>Copyright@2023 All Rights Reserved</p>
                <p className='text-gray-400 text-center'>Terms & Conditions</p>       

            </div>
        </div>
    </footer>
  )
}
