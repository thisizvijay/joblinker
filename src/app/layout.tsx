import './globals.css'
import { Lato } from 'next/font/google'

const inter =  Lato({
  weight: '400',
  subsets: ['latin-ext'],
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*  */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 

      <body className={inter.className}>{children}</body>
    </html>
  )
}
