import Link from 'next/link';
import React from 'react'
import { ImFacebook,ImTwitter,ImYoutube } from "react-icons/im";


export default function Header() {
  return (
    <div>
        <header className='bg-gray-50'>
             <div className='xl:mx-auto xl:container flex flex-col items-center py-3 text-center sm:flex-row sm:justify-between'>
                <div className='md:flex-none sm:py-0 w-96 order-1 sm:order-2 flex justify-center py-4'>
                    <input className='input-text' type='text' placeholder='Search...' />
                </div>
                <div className='shrink w-80 sm:order-2'>
                    <Link className='font-bold uppercase text-3xl' href="/">Design</Link>
                </div>
                <div className='w-96 order-3 flex justify-center'>
                    <div className='flex gap-6'>
                        <Link href="/"><ImFacebook className='text-[#888888]'  /></Link>
                        <Link href="/"><ImTwitter color='#888888' /></Link>
                        <Link href="/"><ImYoutube color='#888888' /></Link>


                    </div>
                </div>
                </div>   
        </header>
    </div>
  )
}
