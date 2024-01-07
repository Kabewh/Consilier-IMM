import './globals.css'
import Navbar from '@/app/components/Navbar'

export const metadata = {
  title: 'Consilier-IMM',
  description: 'Consilier-IMM Desciere',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className='max-w-screen-xl mx-auto'>
          {children}
        </div>
      </body>
    </html>
  )
}
