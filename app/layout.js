import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Full-Stack Software Engineer | Jean Emmanuel Cadet',
  description: 'I am a Full-Stack Software Engineer with over 5 years of experience in web development. I am proficient in all aspects of the development process, from front-end to back-end. If you are looking for a talented and experienced Full-Stack Software Engineer, please contact me today. I would be happy to discuss your project and how I can help you achieve your goals.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
