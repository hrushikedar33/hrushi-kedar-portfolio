import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/provider/theme-provider';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'hrushikedar',
    description: 'Hrushikesh Kedar',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            {/* TODO: add theme colour here "bg-white dark:bg-[#313338]" */}
            <body className={cn(inter.className, '')}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    storageKey="portfolio-theme"
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
