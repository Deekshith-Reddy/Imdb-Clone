import Header from "@/components/Header";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "IMDB Application",
  description: "This is an IMBD Clone Website ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />
          {/* Navbar */}
          <Navbar />
          {/* SearchBox */}

          {children}
        </Providers>
      </body>
    </html>
  );
}
