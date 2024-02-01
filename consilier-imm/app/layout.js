import './globals.css'

export const metadata = {
  title: 'Consilier-IMM',
  description: 'Consilier-IMM Desciere',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        {children}
      </body>
    </html >
  )
}
