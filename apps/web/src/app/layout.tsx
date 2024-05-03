import '@repo/ui/globals.css';
import '../styles/globals.css';

import { GoogleAnalytics } from '@/components/google-analytics';
import { Link } from '@/components/link';
import { siteConfig } from '@/config/site-config';
import { webEnv } from '@/config/web-env';
import { ThemeProvider } from '@/providers/ThemeProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'computing', 'atman'],
  authors: [
    {
      name: siteConfig.creator,
      url: webEnv.NEXT_PUBLIC_APP_URL,
    },
  ],
  creator: siteConfig.creator,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterCreator,
  },
  icons: {
    icon: '/favicons/favicon.ico',
    shortcut: '/favicons/favicon-16x16.png',
    apple: '/favicons/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

// export const viewport: Viewport = {
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
// }

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-background">{children}</div>
          {/* --- Debug Room ---- */}
          {webEnv.NEXT_PUBLIC_IS_DEV && (
            <div className="flex justify-center py-4">
              <Link
                href="/debug"
                className="bg-destructive/100 text-primary-foreground rounded-sm px-4 py-2"
              >
                Debug Room
              </Link>
            </div>
          )}
        </ThemeProvider>
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
      </body>
    </html>
  );
}
