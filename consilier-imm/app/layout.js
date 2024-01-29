import './globals.css'

export const metadata = {
  title: 'Consilier-IMM',
  description: 'Consilier-IMM Desciere',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-100">
        {children}
      </body>
    </html >
  )
}
