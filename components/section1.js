import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Author from './_child/author'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Autoplay} from 'swiper'

// Import Swiper styles
import 'swiper/css';

export default function section1() {
  SwiperCore.use(Autoplay)
  const bg={
    background:"url('/images/banner.png')no-repeat",
    backgroundPosition:"right"
  }
  return (
    <section className='py-16' style={bg}>
        <div className='container mx-auto md:px-20'>
            <h1 className='font-bold text-4xl pb-12 text-center'>Trending</h1>

            <Swiper
     
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay:12000
      }}
     
    >
      <SwiperSlide>  {Slide1()}</SwiperSlide>
      <SwiperSlide>  {Slide2()}</SwiperSlide>
      <SwiperSlide>  {Slide3()}</SwiperSlide>
      <SwiperSlide>  {Slide4()}</SwiperSlide>
      ...
    </Swiper>

          
        </div>
    </section>
  )

}

function Slide1(){
  return(
    <div className='grid md:grid-cols-2'>
        <div className='image'>
          <Link href='/'>
            <Image width={600} height={600} src='/images/img1.png' />
          </Link>
            
        </div>
        <div className='info ml-5 flex justify-center flex-col '>
          <div className='cat'>
              <Link className='text-orange-600 hover:text-orange-800' href={'/'}>
                Business.Travel
              </Link>
              <Link className='text-gray-800 hover:text-gray-600' href={'/'}>
                July3.2022
              </Link>
          </div>

          <div className='title '>
              <Link className='text-3xl font-bold hover:text-gray-600 text-gray-800 xl:text-6xl' href={'/'}>
                  Your most unhappy customers are 
                  your greatest source of learning
               </Link>
          </div>
          <p className='text-gray-500 py-3 text-sm'>
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
          </p>
          <Author />
        </div>
    </div>
  )
}

function Slide2(){
  return(
    <div className='grid md:grid-cols-2'>
        <div className='image'>
          <Link href='/'>
            <Image width={600} height={600} src='/images/img2.png' />
          </Link>
            
        </div>
        <div className='info ml-5 flex justify-center flex-col '>
          <div className='cat'>
              <Link className='text-orange-600 hover:text-orange-800' href={'/'}>
                Business.Travel
              </Link>
              <Link className='text-gray-800 hover:text-gray-600' href={'/'}>
                July3.2022
              </Link>
          </div>

          <div className='title '>
              <Link className='text-3xl font-bold hover:text-gray-600 text-gray-800 xl:text-6xl' href={'/'}>
                  Your most unhappy customers are 
                  your greatest source of learning
               </Link>
          </div>
          <p className='text-gray-500 py-3 text-sm'>
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
          </p>
          <Author />
        </div>
    </div>
  )
}
function Slide3(){
  return(
    <div className='grid md:grid-cols-2'>
        <div className='image'>
          <Link href='/'>
            <Image width={600} height={600} src='/images/img3.png' />
          </Link>
            
        </div>
        <div className='info ml-5 flex justify-center flex-col '>
          <div className='cat'>
              <Link className='text-orange-600 hover:text-orange-800' href={'/'}>
                Business.Travel
              </Link>
              <Link className='text-gray-800 hover:text-gray-600' href={'/'}>
                July3.2022
              </Link>
          </div>

          <div className='title '>
              <Link className='text-3xl font-bold hover:text-gray-600 text-gray-800 xl:text-6xl' href={'/'}>
                  Your most unhappy customers are 
                  your greatest source of learning
               </Link>
          </div>
          <p className='text-gray-500 py-3 text-sm'>
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
          </p>
          <Author />
        </div>
    </div>
  )
}
function Slide4(){
  return(
    <div className='grid md:grid-cols-2'>
        <div className='image'>
          <Link href='/'>
            <Image width={600} height={600} src='/images/img4.png' />
          </Link>
            
        </div>
        <div className='info ml-5 flex justify-center flex-col '>
          <div className='cat'>
              <Link className='text-orange-600 hover:text-orange-800' href={'/'}>
                Business.Travel
              </Link>
              <Link className='text-gray-800 hover:text-gray-600' href={'/'}>
                July3.2022
              </Link>
          </div>

          <div className='title '>
              <Link className='text-3xl font-bold hover:text-gray-600 text-gray-800 xl:text-6xl' href={'/'}>
                  Your most unhappy customers are 
                  your greatest source of learning
               </Link>
          </div>
          <p className='text-gray-500 py-3 text-sm'>
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
          </p>
          <Author />
        </div>
    </div>
  )
}


