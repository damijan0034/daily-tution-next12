import Related from '@/components/_child/related'
import Author from '../../components/_child/author'
import Format from '@/components/layout/format'
import Image from 'next/image'
import React from 'react'
import getPost from '@/lib/helper'
import fetcher from '@/lib/fetcher'
import Spinner from '@/components/_child/spinner'
import Error from '@/components/_child/error'
import {useRouter} from 'next/router'

export default function Page(){
    const router=useRouter()
    const{postId}=router.query
    const{data,isLoading,isError}=fetcher(`api/posts/${postId}`)

    if(isLoading)return <Spinner></Spinner>
    if(isError)return <Error></Error>

    return <Article {...data}></Article>
}

 function Article({author,img,id,title,subtitle,description}) {
    
  return (
    
        <Format>
        <section className='container mx-auto w-1/2 py-16 md:px-2'>
            <div className='flex justify-center'>
               {author ? <Author /> : <></>} 
            </div>
            <div className='post py-10'>
                <h1 className='font-bold text-4xl text-center'>
                        Your most unhappy customers are your greatest source of learning
                </h1>
                
                    
                <p className='text-gray-500 text-xl text-center'> {subtitle}</p>
                <div className='py-10'>
                    <Image src={img} width={900} height={600}></Image>
                </div>
                <div className='content text-lg text-gray-600 flex flex-col gap-4'>
                    {description}
                </div>
                
            </div>
            <Related />
        </section>
    </Format>
  )
}

export async function getStaticProps({params}){
    const posts=await getPost(params.postId)

    return{
        props:posts
    }
}

export async function getStaticPaths(){
    const posts=await getPost()

    const paths=posts.map(value=>{
        return{
            params:{
                postId:value.id.toString()
            }
        }
    })

    return{
        paths,
        fallback:false
    }
}
