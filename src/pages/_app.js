// import '@/styles/globals.css'
import '/public/assets/css/app.css'
import '/public/assets/css/bootstrap.css'
import '/public/assets/css/icons.css'
import localFont from 'next/font/local'

const myFont = localFont({
  src: [
    {
      path: '../../public/assets/fonts/inter-light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/inter-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/inter-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/inter-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export default function App({ Component, pageProps }) {
 return <div className={myFont.className}>
      <Component {...pageProps} />
    </div>
}

