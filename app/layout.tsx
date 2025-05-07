import "katex/dist/katex.min.css";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/layout";
import { ThemeProvider } from "next-themes";
import { ViewTransitions } from "next-view-transitions";
import Image from "next/image";
import "nextra-theme-blog/style.css";
import { Search } from "nextra/components";

import { Navigation } from "@/components";
import ContactButtons from "@/components/ContactButtons";
import { data } from "@/data";
import profilepic from "@/data/profilepic.png";
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-open-sans",
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const sections = data.sections().sections;
  return (
    <html lang="en" suppressHydrationWarning className={openSans.className}>
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <main className="mx-auto flex max-w-7xl gap-4 py-8">
            <div className="block max-w-2xs min-w-2xs" />
            <aside className="fixed max-w-2xs min-w-2xs">
              <section className="me-card">
                <Image
                  src={profilepic}
                  alt="Profile Picture"
                  className="mx-auto rounded-full"
                  width={150}
                  height={150}
                />
                <div className="flex flex-col items-center">
                  <p className="mb-2 text-lg font-semibold">Jiwon (Jason) Choi</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Research Scientist</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Visualization, HCI, and ML
                  </p>
                </div>
                <ContactButtons />
              </section>
              <section className="me-card">
                <Navigation sections={sections} />
                <Search />
              </section>
            </aside>
            <ViewTransitions>
              <article
                className="drawer-content prose prose-base prose-img:rounded-lg dark:prose-invert me-card min-h-[120vh] max-w-none px-16"
                dir="ltr"
                data-pagefind-body>
                {children}
              </article>
            </ViewTransitions>
          </main>

          <Footer className="container mx-auto my-8 max-w-7xl">
            Copyright © 2025 Jiwon Jason Choi
          </Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
