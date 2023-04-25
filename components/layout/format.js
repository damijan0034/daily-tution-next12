import React from 'react'
import Header from '../header'
import Footer from '../footer'
import Head from 'next/head'

export default function Format({children}) {
  return (
    <div>
        <Head>
            <title>Blog</title>
        </Head>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </div>
  )
}
