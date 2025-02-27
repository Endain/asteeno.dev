'use client'

import React, {Children} from "react";

interface SkillSetProps {
    className?: string,
    children: React.ReactNode
}

export default function SkillSet({className = "", children}: SkillSetProps) {
    const childrenArray = Children.toArray(children);
    const seperatedChildren = childrenArray.flatMap((child, index, array) => {
        if (index === array.length - 1) {
            return [child];
        } else {
            return [child, ", "];
        }
    });

    return (
        <div className={`${className} print:text-sm`}>{seperatedChildren}</div>
    );
}
