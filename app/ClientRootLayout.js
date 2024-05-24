"use client"; // Mark this as a client component

import { useEffect, useState } from "react";

export default function ClientRootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <div className={`relative ${isDarkMode ? "dark" : ""}`}>{children}</div>
  );
}
