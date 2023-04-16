import './globals.css'

export const metadata = {
  title: 'IMDB Application',
  description: 'This is an IMBD Clone Website ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  ) 
}