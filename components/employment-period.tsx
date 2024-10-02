'use client'

interface EmploymentPeriodProps {
    className?: string,
    role: string,
    start: string,
    end: string
}

export default function EmploymentPeriod({className = "", role, start, end}: EmploymentPeriodProps) {
    return (
        <h4 className={`${className} font-medium flex flex-col sm:flex-row sm:space-x-2 mb-1`}>
            <div>{role}</div>
            <div className="text-neutral-400">
                <span>{start}</span>
                <span className="mx-1.5">-</span>
                <span>{end}</span>
            </div>
        </h4>
    );
}
