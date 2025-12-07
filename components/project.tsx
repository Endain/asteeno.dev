'use client'

interface ProjectProps {
    className?: string,
    children: React.ReactNode,
    date: string
}

export default function Project({className = "", children, date}: ProjectProps) {
    return (
        <div className="screen:mb-2 print: mb-1.5">
            <h4 className={`${className} font-semibold flex flex-col items-start sm:items-center sm:flex-row content-center sm:space-x-2`}>
                <div className="print:inline-block print:border-b-steel-blue print:border-b-[1.5px] print:border-solid">{children}</div>
                <div className="font-medium tracking-tighter text-smaller text-neutral-600">{date}</div>
            </h4>
        </div>
    )
}
