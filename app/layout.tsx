import "../styles/global.css"

import favicon from "assets/favicon.ico"
import Footer from "components/footer"
import Header from "components/header"
import type { Metadata } from 'next'
import { Roboto } from "next/font/google"

export const metadata: Metadata = {
  title: 'Gourmetsvamp Stockholm',
  description: 'Funghies, gourmet svampar odlade i Stockholm',
  icons: favicon.src
};

const inter = Roboto({
  subsets: ['latin'],
  weight: ["100", "300", "400", "500", "700", "900"]
})

export default function Layout({ children }) {
  return (
    <html className={inter.className}>
      <body className="flex flex-col">
        <Header title="Funghies" />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
