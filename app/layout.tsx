import './globals.css'
import {Footer, Navbar} from '@/components';



export const metadata = {
  title: 'Аренда Автомобилей',
  description: 'Посмотрите самые лучшие машины в мире.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={'relative'}>
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
