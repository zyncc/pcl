import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { MainNav } from "@/components/main-nav";

export const metadata: Metadata = {
  title: "Donate to the Needy",
  description: "Charity for the Poor People",
};

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  style: ["italic", "normal"],
  preload: true,
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-3 flex h-16 items-center justify-between">
              <Link
                href="/"
                className="flex items-center gap-2 font-bold text-xl"
              >
                <span>RiseTogether</span>
              </Link>
              <MainNav />
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
