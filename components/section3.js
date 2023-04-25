
 

import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"

export default function section3() {
  return (
    <section className="container mx-auto md:px-20 py-16">
        <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

        {/* swiper */}
        <Swiper
            slidesPerView={2}
        >
            <SwiperSlide>{  Post1() }</SwiperSlide>
            <SwiperSlide>{  Post2() }</SwiperSlide>
            <SwiperSlide>{  Post1() }</SwiperSlide>
            <SwiperSlide>{  Post1() }</SwiperSlide>
            <SwiperSlide>{  Post1() }</SwiperSlide>
        </Swiper>

    </section>
  )
}


function Post1(){
    return (
        <div className="grid">
            <div className="images">
                <Link href={"/"}><Image src="/images/img1.png" width={600} height={400} /></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link className="text-orange-600 hover:text-orange-800" href={"/"}>Business, Travel</Link>
                    <Link className="text-gray-800 hover:text-gray-600" href={"/"}>- July 3, 2022</Link>
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
function Post2(){
    return (
        <div className="grid">
            <div className="images">
                <Link href={"/"}><Image src="/images/img2.png" width={600} height={400} /></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link className="text-orange-600 hover:text-orange-800" href={"/"}>Business, Travel</Link>
                    <Link className="text-gray-800 hover:text-gray-600" href={"/"}>- July 3, 2022</Link>
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