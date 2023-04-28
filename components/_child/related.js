import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Author from './author'
import fetcher from '@/lib/fetcher'
import Spinner from './spinner'
import Error from './error'

export default function Related() {
    const{data,isLoading,isError}=fetcher('api/posts')

 if(isLoading) return <div><Spinner></Spinner></div>
 if(isError) return <Error></Error>
  return (
    <section className='pt-20'>
        <h1 className="font-bold text-4xl py-12">Related</h1>
        <div className='flex flex-col gap-10'>
            
            {data.map((value,index)=>(
                <Post data={value} key={index} />
            ))
            
            }
        </div>
    </section>
  )
}

function Post({data}){
    return(
        <div className='flex gap-5'>
                 <div className="image flex flex-col justify-start">
                <Link href={"/"}><Image src={data.img} className="rounded" width={300} height={200} /></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link className="text-orange-600 hover:text-orange-800" href={"/"}>Business, Travel</Link>
                    <Link className="text-gray-800 hover:text-gray-600" href={"/"}>- July 3, 2022</Link>
                </div>
                <div className="title">
                    <Link className="text-xl font-bold text-gray-800 hover:text-gray-600" href={"/"}>Your most unhappy customers are your greatest source of learning</Link>
                </div>
                <Author></Author>
            </div>
        </div>
    )
}
