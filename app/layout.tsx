import type {Metadata} from "next";
import "./globals.css";
import {contentFont, headerFont} from "@/src/fonts";

export const metadata: Metadata = {
    title: "Austin Steeno | Software Engineer",
    description: "The professional history, experiments and musings of Austin Steeno"
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${contentFont.className} ${headerFont.variable} bg-stone-200 text-steel-blue print:w-print-width print:h-print-height`}>
        {children}
        </body>
        </html>
    );
}
