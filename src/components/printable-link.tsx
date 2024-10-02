'use client'

interface LinkProps {
    className?: string,
    children: React.ReactNode,
    to: string
}

export default function PrintableLink({className = "", children, to}: LinkProps) {
    return (
        <span className={`${className} inline-block`}>
            <a className="inline-block screen:border-b-neutral-300 screen:border-b-2 screen:border-dashed screen:-mb-[2px]"
               href={to}>
                {children}
            </a>
        </span>
    )
}
