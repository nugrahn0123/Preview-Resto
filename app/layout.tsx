import type { Metadata } from "next"
import "./globals.css"
import { CartProvider } from "./context/CartContext"
import Navbar from "./components/Navbar"
import CartSidebar from "./components/CartSidebar"

export const metadata: Metadata = {
  title: "Resto — Fine Dining",
  description: "Nikmati pengalaman kuliner terbaik",
  keywords: ["restoran", "fine dining", "reservasi", "menu", "kuliner"],
  openGraph: {
    title: "Resto — Fine Dining",
    description: "Nikmati pengalaman kuliner terbaik dengan bahan segar pilihan",
    type: "website",
    locale: "id_ID",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <CartProvider>
          <Navbar />
          {children}
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  )
}
