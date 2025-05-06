import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/layout";
import { ThemeProvider } from "next-themes";
import { ViewTransitions } from "next-view-transitions";
import Image from "next/image";
import "nextra-theme-blog/style.css";
import { Head, Search } from "nextra/components";

import profilepic from "@/data/profilepic.png";
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
        <ThemeProvider attribute="class">
          <main className="drawer lg:drawer-open mx-auto max-w-[100rem] gap-16 py-8">
            <input id="drawer" type="checkbox" className="drawer-toggle lg:hidden" />
            <aside className="drawer-side w-sm gap-8 p-4">
              <section className="flex w-full flex-col items-center gap-4">
                <Image
                  src={profilepic}
                  alt="Profile Picture"
                  className="mx-auto rounded-full"
                  width={200}
                  height={200}
                />
                <span>Jiwon (Jason) Choi</span>
              </section>
              <Search />
              123213
            </aside>
            <ViewTransitions>
              <article
                className="drawer-content prose prose-base prose-img:rounded-lg dark:prose-invert w-full max-w-none"
                dir="ltr"
                data-pagefind-body>
                {children}
              </article>
            </ViewTransitions>
          </main>

          <Footer className="container mx-auto my-8 max-w-[100rem]">
            Copyright © 2025 Jiwon Jason Choi
          </Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
