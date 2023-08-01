import "./globals.css";
import type { Metadata } from "next";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "MiniMood",
  description: "Minimood is a fabulous fashion e-commerce store.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
