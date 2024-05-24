import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: "Orientation",
  description: "Orientation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"relative " + cairo.className}>{children}</body>
    </html>
  );
}
