import Header from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'IMDB Application',
  description: 'This is an IMBD Clone Website ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header/>
        {/* Navbar */}

        {/* SearchBox */}
        
        {children}</body>
    </html>
  ) 
}
