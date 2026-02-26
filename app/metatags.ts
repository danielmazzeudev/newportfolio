import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
    colorScheme: 'light',
};

export const metadataObject: Metadata = { 
    title: "Daniel Mazzeu", 
    description: "Full-stack Developer with expertise in Next.js, Node.js, React, and TypeScript. Specialist in creating scalable web and mobile applications, systems architecture, and Data Science (FIAP).",
    keywords: [
        "Daniel Mazzeu",
        "Full-stack Developer",
        "Next.js", 
        "React",
        "TypeScript",
        "Node.js",
        "Software Development",
        "Data Science",
        "Scalable Web",
        "Flutter",
    ],
    
    authors: [{ name: "Daniel Mazzeu" }],
    
    robots: {
        index: true,
        follow: true,
        googleBot: { 
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    icons: { 
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
    },
    
    openGraph: {
        title: "Daniel Mazzeu",
        description: "High-performance Full-stack solutions developed with Next.js, Node.js, and React. Experienced in complex systems architecture and infrastructure management (Vercel, Railway).",
        url: "https://danielmazzeu.com.br",
        siteName: "Daniel Mazzeu",
        images: [{
            url: "https://danielmazzeu.com.br/thumbnail.png", 
            width: 1200, 
            height: 630,
            alt: 'Daniel Mazzeu | Full-stack Developer, Next.js and Cloud'
        }],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image", 
        title: "Daniel Mazzeu | Full-stack Expert (Next.js, Node.js, React)",
        description: "Explore my portfolio of scalable systems and expertise in web development, mobile development, and consulting.",
        images: ['https://danielmazzeu.com.br/thumbnail.png'],
    },
};