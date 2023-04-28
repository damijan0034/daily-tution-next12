import Image from 'next/image'
import React from 'react'

export default function Error() {
  return (
    <div className='text-center py-10'>
            <h1 className='font-bold text-3xl text-orange-600 py-10'> Something went wrong</h1>
            <Image width={400} height={400} src='/images/not_found.jpg'></Image>
    </div>
  )
}
