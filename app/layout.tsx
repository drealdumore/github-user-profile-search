import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "./_components/Footer";
import { sharedMetadata, SOCIALS } from "../utils/metadata";

const geistSans = localFont({
  src: "./_fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./_fonts/GeistMonoVF.woff",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(sharedMetadata.url),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  title: {
    default: sharedMetadata.title,
    template: `%s | ${sharedMetadata.title}`,
  },
  description: sharedMetadata.description,
  keywords: [
    "GitHub user search",
    "GitHub profiles",
    "Developer tools",
    "Open source search",
    "GitHub repos",
    "Next.js GitHub search",
  ],
  openGraph: {
    title: {
      default: sharedMetadata.title,
      template: `%s | ${sharedMetadata.title}`,
    },
    description: sharedMetadata.description,
    type: "website",
    url: sharedMetadata.url,
    siteName: sharedMetadata.title,
    locale: "en_IE",
    images: [
      {
        url: sharedMetadata.image,
        width: 1200,
        height: 630,
        alt: "GitHub User Search App Preview",
      },
    ],
  },
  alternates: { canonical: sharedMetadata.url },
  twitter: {
    card: "summary_large_image",
    site: `@${SOCIALS.twitter.username}`,
    creator: `@${SOCIALS.twitter.username}`,
    title: sharedMetadata.title,
    description: sharedMetadata.description,
    images: [sharedMetadata.image],
  },
};
