import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import { open_Sans } from "./fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="sv" className={open_Sans.variable}>
      <body className="flex flex-col min-h-screen px-4 py-2">
        <header>
          <Navbar />
        </header>
        <main className="flex-grow">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
