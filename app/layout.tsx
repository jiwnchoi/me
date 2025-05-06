import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/layout";
import { Layout, Navbar } from "nextra-theme-blog";
import "nextra-theme-blog/style.css";
import { Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";

// Initialize Open Sans font with italic weight
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Jiwon Jason Choi",
  description: "Hello, I'm Jiwon Choi.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={openSans.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Navbar pageMap={await getPageMap()}>
          <Search />
        </Navbar>
        <Layout>
          <main className="container mx-auto max-w-3xl px-4 py-8">{children}</main>

          <Footer>Copyright © 2025 Jiwon Jason Choi</Footer>
        </Layout>
      </body>
    </html>
  );
}
