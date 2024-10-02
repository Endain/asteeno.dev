'use client'

import PrintableLink from "@/app/printable-link";

interface EmployerProps {
    className?: string,
    children: React.ReactNode
    link: string,
}

export default function Employer({className = "", children, link}: EmployerProps) {
    return (
        <h4 className={`${className} font-semibold screen:mb-2 print:mb-1.5 print:inline-block print:border-b-steel-blue print:border-b-[1.5px] print:border-solid`}>
            <PrintableLink to={link}>{children}</PrintableLink>
        </h4>
    );
}
