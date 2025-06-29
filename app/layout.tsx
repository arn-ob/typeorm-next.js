import { MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';
import { inter } from '@/app/ui/fonts';
import '@/app/globals.css';
import '@mantine/core/styles.layer.css';
import mantineTheme from '@/app/lib/mantineTheme';

export const metadata: Metadata = {
    title: 'App title',
    description: 'App desc',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <title></title>
            </head>
            <body className={`${inter.className} antialiased`}>
                <MantineProvider theme={mantineTheme} defaultColorScheme="dark">
                    {children}
                </MantineProvider>
            </body>
        </html>
    );
}
