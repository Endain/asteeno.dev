'use client'

import React, {useLayoutEffect, useRef} from "react";

interface SerialTextProps {
    speed?: number,
    delay?: number,
    jitter?: number,
    stagger?: number,
    children?: React.ReactNode,
}

export default function SerialText({speed = 40, delay = 0, jitter = 50, stagger = 0, children}: SerialTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        console.log("useLayoutEffect");
        console.log(containerRef.current);
        console.log(children);

        console.log(containerRef.current);

        return () => {}
    }, [])

    return (
        <div ref={containerRef}>{children}</div>
    );
}