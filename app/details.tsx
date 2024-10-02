'use client'

interface DetailsProps {
    className?: string,
    children: React.ReactNode
}

export default function Details({className = "", children}: DetailsProps) {
    return (
        <div className={`${className} text-sm sm:text-base print:text-sm`}>{children}</div>
    );
}
