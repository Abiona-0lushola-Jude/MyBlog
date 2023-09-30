
import Footer from '@components/Footer'
import Header from '@components/Header'
import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Blog Intense',
  description: 'This is a blog generated from using existing blog API while on runtime',
}

export default function RootLayout({ children }) {
  return (
    <div className='app'>
      <Header />
      <body>{children}</body>
      <Footer />
    </div>
  )
}
