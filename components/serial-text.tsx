'use client'

import React, {useLayoutEffect, useRef, useState} from "react";
import {WithChildren, WithClass} from "@/app/shared/interfaces";
import {getWrappedLines, StyleName} from "@/app/shared/word-wrap";
import SerialLine, {SerialLineProps} from "@/components/serial-line";

export interface SerialTextProps {
    speed?: number,
    delay?: number,
    jitter?: number,
    stagger?: number
}

interface TextLine {
    config: Required<SerialLineProps>,
    text: string,
    key: number
}

const requiredStyles: StyleName[] = ["font", "fontFamily", "fontSize", "lineHeight", "letterSpacing"];

function sequenceLines(lines: string[], config: Required<SerialTextProps>): TextLine[] {
    let previousTime = config.delay;
    return lines.map((line, index) => {
        const renderTime = (line.length / config.speed) * 1000;
        const textLine = {
            config: {
                speed: 40,
                delay: previousTime,
                jitter: 50
            },
            text: line,
            key: index
        } as TextLine;

        previousTime += renderTime;

        return textLine;
    });
}

export default function SerialText({
                                       speed = 40,
                                       delay = 0,
                                       jitter = 50,
                                       stagger = 0,
                                       children,
                                       className
                                   }: SerialTextProps & WithChildren & WithClass) {
    const containerRef = useRef<HTMLDivElement>(null);
    const needsRecalculate = useRef(true);
    const [lines, setLines] = useState<TextLine[]>([]);

    useLayoutEffect(() => {
        console.log("useLayoutEffect");
        console.log(containerRef.current?.outerHTML);

        const props: Required<SerialTextProps> = {speed, delay, jitter, stagger};
        let lines: TextLine[] = [];
        if (containerRef.current) {
            lines = sequenceLines(getWrappedLines(containerRef.current, requiredStyles), props);
            setLines(lines);
            needsRecalculate.current = false;
        }

        console.log(lines);

        return () => {
        }
    }, [])

    console.log("serial-text rendered");
    console.log(containerRef.current?.outerHTML);

    const renderChildren = () => {
        return children
    }

    const renderLines = () => {
        return (<div>{lines.map(line => (<SerialLine {...line.config} key={line.key}>{line.text}</SerialLine>))}</div>)
    };

    return (<div className={className}
                 ref={containerRef}>{needsRecalculate.current ? renderChildren() : renderLines()}</div>);
}