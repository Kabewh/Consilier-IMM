import Image from 'next/image'
import bgImage from '@/public/homeBackground.png'
import Navbar from '@/app/components/Navbar'
import { Kadwa } from 'next/font/google'

const kadwa = Kadwa({ weight: '400', subsets: ['devanagari'] })

export default function Home() {

  return (
    <>
      <section className={kadwa.className}>
        <div className='bg-home-background bg-cover bg-center bg-fixed inset-0 h-screen'>
          <Navbar />
        </div>
      </section>
    </>
  )
}
