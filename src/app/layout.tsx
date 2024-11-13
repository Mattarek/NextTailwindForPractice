import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header, Footer } from '@/components';
import './globals.css';
import Container from '@/components/Container';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'My Posts',
    description: '',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} min-h-screen bg-zinc-100 text-zinc-900`}
            >
                <Container>
                    <Header />
                    {children}
                    <Footer />
                </Container>
            </body>
        </html>
    );
}
