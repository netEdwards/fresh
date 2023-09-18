import './globals.css'
import NavOne from './components/navHeader/navHeader'
import { inter } from './fonts.js'
import { anton } from './fonts.js'




export const metadata = {
  title: 'Tir',
  description: 'Creative website made by Adrian E.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${anton.className}`}>
        <NavOne/>

        {children}
        
        
        </body>
    </html>
  )
}
