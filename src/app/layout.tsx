import "../styles/global.css";

import favicon from "assets/favicon.ico";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Footer from "src/components/footer";
import Header from "src/components/header";

export const metadata: Metadata = {
  title: 'Gourmetsvamp Stockholm',
  description: 'Funghies, gourmet svampar odlade i Stockholm',
  icons: favicon.src
};

const inter = Roboto({
  subsets: ['latin'],
  weight: ["100", "300", "400", "500", "700", "900"]
});

export default function Layout({ children }) {
  return (
    <html className={inter.className}>
      <body style={{display: 'flex', flexDirection: 'column'}}>
        <Header title="Funghies" />
        <div style={{flexGrow: 1}}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
