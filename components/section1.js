import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Author from './_child/author'
import fetcher from "@/lib/fetcher";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Autoplay} from 'swiper'

// Import Swiper styles
import 'swiper/css';
import Spinner from './_child/spinner';
import Error from './_child/error';

export default function section1() {
  SwiperCore.use(Autoplay)
  const bg={
    background:"url('/images/banner.png')no-repeat",
    backgroundPosition:"right"
  }

  const{data,isLoading,isError}=fetcher('api/posts')

 if(isLoading) return <div><Spinner>an</Spinner></div>
 if(isError) return <Error></Error>
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
      
      {
        data.map((value,index)=>(
          <SwiperSlide key={index}><Slide data={value} />  </SwiperSlide>
        ))
      }
      ...
    </Swiper>

          
        </div>
    </section>
  )

}

function Slide({data}){
  return(
    <div className='grid md:grid-cols-2'>
        <div className='image'>
          <Link href={`posts/${data.id}`}>
            <Image width={600} height={600} src={data.img} />
          </Link>
            
        </div>
        <div className='info ml-5 flex justify-center flex-col '>
          <div className='cat'>
              <Link className='text-orange-600 hover:text-orange-800' href={'/'}>
                Business.Travel
              </Link>
              <Link className='text-gray-800 hover:text-gray-600' href={'/'}>
                {data.published}
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





