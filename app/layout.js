import Header from "@/components/Header";
import "./globals.css";
import { Roboto } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "YouTube-Themed App",
  description: "A theme inspired by YouTube",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

    <html lang="en" className={roboto.className}>
      <body className="bg-background h-full "> 
        <Header />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
