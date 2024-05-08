import '@repo/ui/globals.css';
import '../styles/globals.css';

import { GoogleAnalytics } from '@/components/google-analytics';
import { siteConfig } from '@/config/site-config';
import { webEnv } from '@/config/web-env';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Toaster } from '@repo/ui';
import type { Metadata, Viewport } from 'next';
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

const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};
export { viewport };

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-background">{children}</div>
          <Toaster
            toastOptions={{
              classNames: {
                description: 'group-[.toast]:text-muted-foreground',
                actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
                cancelButton: 'group-[.toast]:bg-white group-[.toast]:text-black',
                error:
                  'group toast group-[.toaster]:bg-red-100 group-[.toaster]:text-red-600 dark:group-[.toaster]:text-foreground group-[.toaster]:shadow-lg',
                success:
                  'group toast group-[.toaster]:bg-green-100 group-[.toaster]:text-green-600 dark:group-[.toaster]:text-foreground group-[.toaster]:shadow-lg',
                warning:
                  'group toast group-[.toaster]:bg-yellow-100 group-[.toaster]:text-yellow-600 dark:group-[.toaster]:text-foreground group-[.toaster]:shadow-lg',
                info: 'group toast group-[.toaster]:bg-blue-100 group-[.toaster]:text-blue-600 dark:group-[.toaster]:text-foreground group-[.toaster]:shadow-lg',
              },
            }}
          />
        </ThemeProvider>
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
      </body>
    </html>
  );
}
