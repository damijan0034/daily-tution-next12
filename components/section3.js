
 

import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"
import fetcher from "@/lib/fetcher";

export default function section3() {
    const{data,isLoading,isError}=fetcher('api/posts')

 if(isLoading) return <div>Loading...</div>
 if(isError) return <div>Error</div>

  return (
    <section className="container mx-auto md:px-20 py-16">
        <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

        {/* swiper */}
        <Swiper
            slidesPerView={2}
        >
        {
                data.map((value, index) => (
                    <SwiperSlide><Post data={value} key={index}></Post></SwiperSlide>
                ))
            }
            
        </Swiper>

    </section>
  )
}


function Post({data}){
    return (
        <div className="grid">
            <div className="images">
                <Link href={"/"}><Image src={data.img} width={600} height={400} /></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link className="text-orange-600 hover:text-orange-800" href={"/"}>Business, Travel</Link>
                    <Link className="text-gray-800 hover:text-gray-600" href={"/"}>{data.published}</Link>
                </div>
                <div className="title">
                    <Link className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600" href={"/"}>Your most unhappy customers are your greatest source of learning</Link>
                </div>
                <p className="text-gray-500 py-3">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
                <Author></Author>
            </div>
        </div>
    )
}
