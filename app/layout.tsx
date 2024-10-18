import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "./_components/Footer";
import { sharedMetadata, SOCIALS } from "./utils/metadata";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      {/* <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Footer />
      </body> */}

      <body className="flex flex-col min-h-screen">
        {" "}
        {/* Make the body a flex container */}
        <ThemeProvider>
          <main className="flex-grow">
            {" "}
            {/* Allow main to grow and take available space */}
            {children}
          </main>
        </ThemeProvider>
        <Footer /> {/* Footer will now stay at the bottom */}
      </body>
    </html>
  );
}
export const metadata: Metadata = {
  metadataBase: new URL(sharedMetadata.url),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  title: {
    default: sharedMetadata.title,
    template: `%s — ${sharedMetadata.title}`,
  },
  description: sharedMetadata.description,
  keywords: ["Minimalist", "todo app", "todo", "drealdumore"],
  openGraph: {
    title: {
      default: sharedMetadata.title,
      template: `%s — ${sharedMetadata.title}`,
    },
    description: sharedMetadata.description,
    type: "website",
    url: sharedMetadata.url,
    siteName: sharedMetadata.title,
    locale: "en_IE",
    images: sharedMetadata.image,
  },
  alternates: {
    canonical: "/",
  },
  twitter: {
    card: "summary_large_image",
    site: `@${SOCIALS.twitter.username}`,
    creator: `@${SOCIALS.twitter.username}`,
  },
};
