import React, {useEffect, useState} from 'react'
import Layout from '../components/Layout'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      {
        router.pathname !== '/auth-7Empire-admin/signup' 
        && 
        router.pathname !== '/auth-7Empire-admin'
        &&
        router.pathname !== '/auth-7Empire-admin/dashboard'
        ? 
        (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) 
        :
          <Component {...pageProps} />
      }
    </>)

}

export default MyApp
