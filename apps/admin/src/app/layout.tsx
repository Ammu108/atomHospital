import "~/styles/globals.css";

import { TRPCReactProvider } from "@repo/api/react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "Atom Hospital - Admin Dashboard",
  description: "Admin dashboard for Atom Hospital",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${geist.variable}`} lang="en">
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
