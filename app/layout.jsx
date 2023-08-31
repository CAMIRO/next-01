
import Navbar from '../components/Navbar'

export const metadata = {
  title: "Mi tienda con NextJS - Home",
  description: "Esta es la pagina principal de mi tienda",
  keywords: ['tienda', 'online', 'ecommerce']
}

export default function RootLayout({ children }) {
 return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
