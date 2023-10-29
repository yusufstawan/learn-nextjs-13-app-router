"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(0);

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar />
        <div>
          <h1>Layouts: {state}</h1>
          <button onClick={() => setState(state + 1)}>Klik</button>
        </div> */}
        {children}
      </body>
    </html>
  );
}
