import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
const inter = localFont({
  src:"./fonts/Inter-VF.ttf",
  variable:"--font-inter",
  weight:"100 200 300 400 500 600 700 800 900"
}) 
const spaceGrotesk = localFont({
  src:"./fonts/SpaceGrotesk-VF.ttf",
  variable:"--font-space-grotesk",
  weight:" 300 400 500 600 700 800 900"
})

export const metadata: Metadata = {
  title: "Dev Overflow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
