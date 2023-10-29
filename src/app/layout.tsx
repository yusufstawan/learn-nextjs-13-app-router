"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import { useState } from "react";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const disableNavbar = ["/login", "/register"];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(0);
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        {!disableNavbar.includes(pathname) && <Navbar />}
        {/* <div>
          <h1>Layouts: {state}</h1>
          <button onClick={() => setState(state + 1)}>Klik</button>
        </div> */}
        {children}
      </body>
    </html>
  );
}
