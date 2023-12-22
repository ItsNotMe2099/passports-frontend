import 'normalize.css'
import '../styles/globals.scss'
import { AppContext, AppProps } from 'next/app'
import { getSelectorsByUserAgent } from 'react-device-detect'
import { isClient, isXsScreen } from 'utils/media'
import App from 'next/app'
import { AppWrapper } from '@/context/state'
import Head from 'next/head'
import { NextPage } from 'next'
import { ReactElement, ReactNode, useEffect } from 'react'
import Snackbar from '@/components/layout/Snackbar'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  useEffect(() => {
    if (pageProps.isMobile) {
      document.body.classList.add('mobile-ua')
      document.documentElement.className = 'mobile-ua'
    }
  },
    [])
  const getLayout = Component.getLayout ?? ((page) => page)
  return (

    <AppWrapper isMobile={pageProps.isMobile}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Commissioner:wght@100;200;300;400;500;600;700;800;900&family=Genos:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      {getLayout(<Component {...pageProps as any} />)}
      <Snackbar />
    </AppWrapper>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const props = await App.getInitialProps(appContext)

  if (appContext.ctx.req) {
    const ua = appContext.ctx.req.headers['user-agent']
    if (ua) {
      const { isMobile } = getSelectorsByUserAgent(ua)
      props.pageProps.isMobile = isMobile
    } else {
      props.pageProps.isMobile = false
    }
  } else if (isClient) {
    props.pageProps.isMobile = isXsScreen()
  }

  return props
}

// export default appWithTranslation(MyApp)
export default MyApp
