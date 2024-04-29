import { Cairo } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Home from "../public/home.svg";
import Link from "next/link";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: "Orientation",
  description: "Orientation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"relative " + cairo.className}>
        <Link href={"/"}>
          <Image
            className="absolute top-9 right-9 rounded-full hover:bg-blue-600 cursor-pointer p-2 shadow-lg"
            width={50}
            src={Home}
            alt="home"
          />
        </Link>
        {children}
      </body>
    </html>
  );
}
