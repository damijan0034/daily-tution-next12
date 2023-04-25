import React from 'react'

export default function Newslatter() {
  return (
    <section className='mt-20 bg-gray-50'>
        <div className='container mx-auto text-center md:px-20 py-16'>
            <h1 className='font-bold text-3xl'>Subscribe Newsletter</h1>
            <div className='py-4'>
                <input type='text' className='w-9/12 py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline shadow border rounded' placeholder='Enter Your Email' />
            </div>
            <button className='bg-orange-400 px-20 py-3 rounded-full text-gray-50 text-xl' type="">
                Subscribe
            </button>
        </div>
    </section>
  )
}
