import "../styles/global.css"

import favicon from "assets/favicon.ico"
import Header from "components/header"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gourmetsvamp Stockholm',
  description: 'Funghies, gourmet svampar odlade i Stockholm',
  icons: favicon.src
};

export default function Layout({ children }) {
  return (
    <html>
      <body className="flex flex-col">
        <Header title="Funghies" />
        {children}
        <footer className="bg-gray-300 border-t-2 border-black flex items-center justify-center h-[80px]"></footer>
      </body>
    </html>
  )
}
