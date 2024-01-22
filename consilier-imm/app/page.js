import Image from 'next/image'
import bgImage from '@/public/homeBackground.png'
import Navbar from '@/app/components/Navbar'
import { Kadwa } from 'next/font/google'
import Topbar from './components/Topbar'

const kadwa = Kadwa({ weight: '400', subsets: ['devanagari'] })

export default function Home() {
  return (
    <>
      <section className={`${kadwa.className}`}>
        <div className='bg-home-background bg-cover bg-center bg-fixed inset-0 h-screen'>
          <Topbar />
          <Navbar />
          <div className='max-w-screen-xl mx-auto text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et quasi, sit voluptatem aliquam molestiae officia repellat enim est dolore autem. Consectetur libero expedita sapiente incidunt vitae blanditiis, ex repellendus.
          </div>
        </div>
      </section>
    </>
  )
}
