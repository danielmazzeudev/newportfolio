import { metadataObject, viewport as viewportConfig } from "./metatags";
import type { Metadata, Viewport } from "next"; 
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Security from "./security";

import "./globals.css";

export const metadata: Metadata = metadataObject;
export const viewport: Viewport = viewportConfig;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='pt-br' style={{ colorScheme: 'light' }}>
            <body suppressHydrationWarning={true}>
                <Security />
                {children}
                <Analytics/>
                <SpeedInsights/>
            </body>
        </html>
    );
}