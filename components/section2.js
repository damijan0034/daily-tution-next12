import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "./_child/author";

export default function Section2() {
  return (
    <section className="container mx-auto  md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Post title</h1>

      {/*grid*/}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        
        </div>
    </section>
  );
}

function Post() {
  return (
    <div className="item">
      <div className="images">
        <Link href="/">
          <Image
            className="rounded"
            width={500}
            height={350}
            src="/images/img1.png"
          />
        </Link>
      </div>
      <div className="info py-4 flex flex-col justify-center">
        <div className="cat">
          <Link className="text-orange-600 hover:text-orange-800" href={"/"}>
            Business.Travel
          </Link>
          <Link className="text-gray-800 hover:text-gray-600" href={"/"}>
            July3.2022
          </Link>
        </div>
        <div className="title ">
          <Link
            className="text-xl font-bold hover:text-gray-600 text-gray-800 xl:text-6xl"
            href={"/"}
          >
            Your most unhappy customers are your greatest source of learning
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
