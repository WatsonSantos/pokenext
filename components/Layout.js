import Navbar from "./Navbar"
import Footer from "./Footer"

import Head from "next/head"

export default function Layout({children}){

    return(
        <>
        <Head>
            <link rel="shortcut" href="/images/favicon.ico"></link>
            <title>PokeNext</title>
        </Head>
          <Navbar/>
          <main className="main-container">{children}</main>
          <Footer/>
        </>
    )
}