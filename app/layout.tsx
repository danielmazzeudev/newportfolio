import type { Metadata } from "next";
import StyledComponentsRegistry from './lib/registry'

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
        <html lang="pt-br">
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
