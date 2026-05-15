import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import 'easymde/dist/easymde.min.css';
import { ThemeProvider } from '@/components/provider/theme-provider';
import { cn } from '@/lib/utils';

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
});

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
            <body className={cn(manrope.variable, '')}>
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
