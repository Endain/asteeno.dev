'use client'

interface DetailsProps {
    className?: string,
    children: React.ReactNode
}

export default function Details({className = "", children}: DetailsProps) {
    return (
        <div className={`${className} leading-snug print:text-sm`}>{children}</div>
    );
}
