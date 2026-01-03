export type StyleName = keyof CSSStyleDeclaration;

export function getWrappedLines(source: HTMLElement, styles: StyleName[]): string[] {
    // Make a new element we will use to calculate where the text wraps to a new line
    const measure = document.createElement("div");

    console.log(window.getComputedStyle(source));

    // Adopt required styles from the source element
    const sourceStyles = window.getComputedStyle(source);
    for (const style of styles) {
        console.log(`${style as string}: ${sourceStyles[style]}`);
        measure.style.setProperty(style as string, sourceStyles[style] as string);
    }

    // Take it out of the normal document flow, and make its max width match the source element
    measure.style.position = "absolute";
    measure.style.top = "0";
    measure.style.left = "0";
    measure.style.maxWidth = source.clientWidth + "px";

    // Append the element and start inserting text to measure
    document.body.append(measure);

    // Get the text content of the source element, split it on space
    const text = source.textContent ?? "";
    const words = text?.split(" ") ?? [];

    // Always append the first word to get the initial height
    measure.append(words[0]);

    // Keep a list of calculated wrapped lines and initialize measurement variables
    const lines: string[] = [];
    let h = measure.clientHeight;
    let hMeasure = 0;
    let breakIndex = 0;

    // Iterate over each word remaining in the text, adding it prepended with a space, then checking for line wraps
    for (let i = 1; i < words.length; i++) {
        // Add a space character back, then the word
        measure.append(" ");
        measure.append(words[i]);

        // Measure height only once for performance
        hMeasure = measure.clientHeight;

        // If the height has increased, we have wrapped to a new line
        if (hMeasure > h) {
            // Add the current line to the list, reset the break index, update the height
            lines.push(words.slice(breakIndex, i).join(" "));
            breakIndex = i;
            h = hMeasure;
        }
    }

    // If break index is not at the end of the word array, add the last line to the list
    if (breakIndex < words.length) lines.push(words.slice(breakIndex).join(" "));

    // Clean up and remove our measurement element
    //document.body.removeChild(measure);

    // Return the list of wrapped lines
    return lines;
}