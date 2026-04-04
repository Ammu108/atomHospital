import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import { TRPCReactProvider } from "~/trpc/react";
import { api, HydrateClient } from "~/trpc/server";

export const metadata: Metadata = {
  title: "Atom - Hospital Booking System",
  description: "A hospital booking system built with Next.js",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  await api.auth.me.prefetch();

  return (
    <html className={`${geist.variable}`} lang="en">
      <body>
        <TRPCReactProvider>
          <HydrateClient>
            <Navbar />
            {children}
            <Footer />
          </HydrateClient>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
