import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "./_child/author";

import getPost from "@/lib/helper";
import fetcher from "@/lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

export default function Section2() {
 const{data,isLoading,isError}=fetcher('api/posts')

 if(isLoading) return <div><Spinner></Spinner></div>
 if(isError) return <Error></Error>
    
 

  return (
    <section className="container mx-auto  md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Post title</h1>

      {/*grid*/}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
      {
                data.map((value, index) => (
                    <Post data={value} key={index}></Post>
                ))
            }
        
        </div>
    </section>
  );
}

function Post({data}) {
  const{id,category,description,img,published,author,title}=data
  return (
    <div className="item">
      <div className="images">
        <Link href="/">
          <Image
            className="rounded"
            width={500}
            height={350}
            src={img || "/"}
          />
        </Link>
      </div>
      <div className="info py-4 flex flex-col justify-center">
        <div className="cat">
          <Link className="text-orange-600 hover:text-orange-800" href={"/"}>
            {category || "Unknown"}
          </Link>
          <Link className="text-gray-800 hover:text-gray-600" href={"/"}>
            {published}
          </Link>
        </div>
        <div className="title ">
          <Link
            className="text-xl font-bold hover:text-gray-600 text-gray-800 xl:text-6xl"
            href={"/"}
          >
            {title}
          </Link>
        </div>
        <p className="text-gray-500 py-3 text-sm">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
        <Author />
      </div>
    </div>
  );
}
