'use client'

interface LinkProps {
    to: string,
    className?: string,
    children: React.ReactNode
}

export default function PrintableLink({to, className, children}: LinkProps) {
    return (
        <span className={`${className} inline-block`}>
            <a className="inline-block screen:border-b-neutral-300 screen:border-b-2 screen:border-dashed screen:-mb-[2px]"
               href={to}>
                {children}
            </a>
        </span>
    )
}
