import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "...",
    description: "...",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" style={{ colorScheme: 'light' }}>
            <body suppressHydrationWarning={true}>
                {children}
            </body>
        </html>
    );
}
