import type {Metadata} from "next";
import "./globals.css";
import {contentFont, headerFont} from "@/app/fonts";
import Link from "next/link";

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
            className={`${contentFont.className} ${headerFont.variable} bg-stone-200 text-oxford-blue-900 print:w-print-width print:h-print-height`}>
        <header className="print:hidden sticky top-0 bg-gradient-to-r from-oxford-blue-950 to-oxford-blue-900 text-white z-10 flex flex-row font-header font-medium text-lg uppercase shadow-sm">
            <div className="flex flex-col pl-3 pr-6 justify-center">
                <h1 className="self-center font-header font-medium text-xl/4 text-whtie">
                    Austin Steeno
                </h1>
                <h2 className="self-center font-header font-medium whitespace-nowrap text-oxford-blue-200 text-2xs/3">
                    Senior Software Engineer
                </h2>
            </div>
            <Link href="/" className="px-6 py-2 border-b-4 border-oxford-blue-600">About</Link>
            <Link href="weblog" aria-disabled={true} tabIndex={-1} className="pointer-events-none px-6 py-2 border-b-4 border-oxford-blue-900">Weblog</Link>
            <div className="flex-grow border-b-4 border-oxford-blue-900"></div>
        </header>
        {children}
        </body>
        </html>
    );
}
