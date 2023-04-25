import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Author() {
  return (
    <div className="author flex py-5">
      <Image
        width={60}
        height={60}
        src="/images/author/author1.png"
        className="rounded-full"
      ></Image>
      <div className="flex flex-col justify-center px-4">
        <Link href={'/'} className="text-md font-bold hover:text-gray-600 text-gray-800">Flying Hight</Link>
        <span className="text-sm text-gray-500">CEO and Founder</span>
      </div>
    </div>
  );
}
