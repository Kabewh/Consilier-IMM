import Image from 'next/image'
import bgImage from '@/public/homeBackground.png'
import Navbar from '@/app/components/Navbar'
import { Kadwa } from 'next/font/google'
import Topbar from './components/Topbar'
import Link from 'next/link'
import Footer from './components/Footer'

const kadwa = Kadwa({ weight: '400', subsets: ['devanagari'] })

export default function Home() {
  return (
    <>
      <section className={`${kadwa.className}`}>
        <div className='bg-home-background bg-cover bg-center bg-fixed inset-0 h-screen'>
        <Navbar />
          <div className='max-w-screen-xl mx-auto text-white h-5/6 flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-7xl font-bold'>ASOCIATIA CONSILIER IMM</h1>
              <p className='text-3xl text-center mt-5'>
              Experiență juridică de 15+ ani, susținem afacerile mici și mijlocii pentru a le permite să se focuseze pe succesul lor.
              </p>
              <div className='flex items-start'>
                <Link href={"/contact"} className='p-5 bg-orange-800 rounded-sm mt-8 text-lg hover:bg-orange-900 transition ease-in-out duration-300'>CONTACTEAZA-NE</Link>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
      </section>
    </>
  )
}
