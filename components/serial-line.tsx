'use client'

import {monoFont} from "@/app/fonts";
import React, {useEffect, useRef, useState} from "react";

export interface SerialLineProps {
    speed?: number,
    delay?: number,
    jitter?: number,
    children?: React.ReactNode,
}

export default function SerialLine({speed = 40, delay = 0, jitter = 50, children}: SerialLineProps) {
    const initialText = useRef(children?.toLocaleString() ?? "");
    const currentText = useRef(new Array(initialText.current.length).fill(" "));
    const previousIndex = useRef(0);
    const currentIndex = useRef(0);
    const requestRef = useRef<number>(undefined);
    const t0 = useRef(performance.now());
    const tStart = useRef(Math.max(t0.current, t0.current + delay + jitter * (Math.random() - 0.5)));
    const tEnd = useRef(tStart.current + ((1000 / speed) * initialText.current.length));

    const [text, setText] = useState(currentText.current.join(""));

    const animate = (t: number) => {
        // Update the text reveal
        setText(revealText(initialText.current, currentText.current, previousIndex.current, currentIndex.current));
        previousIndex.current = currentIndex.current;

        // Update character range based on time elapsed
        let dt = Math.max(0, t - tStart.current);
        currentIndex.current = Math.floor((dt / (tEnd.current - tStart.current)) * initialText.current.length);

        //console.log("dt", dt);

        // If all characters have been revealed, end the animation, otherwise continue
        if(previousIndex.current <= initialText.current.length - 1) {
            requestRef.current = requestAnimationFrame(animate);
        } else {
            requestRef.current = undefined;
        }
    };

    useEffect(() => {
        // Only kick off the effect if there is any text to render
        if(initialText.current.length > 0) {
            requestRef.current = requestAnimationFrame(animate);
        }

        // Return the cleanup function to cancel any ongoing animation
        return () => {
            if(requestRef.current) cancelAnimationFrame(requestRef.current);
        }
    }, []);

    return (
        <div>{text}</div>
    );
}

function revealText(source: string, masked: Array<string>, start: number, end: number): string {
    // Iterate over the range and unmask characters
    for(let i = start; i < end; i++) {
        masked[i] = source[i];
    }

    return masked.join("");
}