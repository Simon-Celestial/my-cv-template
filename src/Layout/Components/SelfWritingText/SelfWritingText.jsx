import React, {useEffect, useState, useMemo} from 'react'
import styles from "./SelfWritingText.module.scss";

const words = 'Junior Front End Developer '.split(' ');

const timelinePositions = words.map(it => it.length * 2);
const framesPerCycle = timelinePositions.reduce((a,b) => a + b, 0);

const newPositions = [];
for (let i = 1; i <= words.length; i++) {
    let sum = 0;
    for (let j = 0; j < i; j++) {
        sum+=timelinePositions[j];
    }
    newPositions.push(sum);
}
export const SelfWritingText = () => {
    const frameTime = 100;
    const [frame, setFrame] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setFrame(prev => (prev + 1) % framesPerCycle);
        }, frameTime);

        return () => clearInterval(intervalId);
    }, []);



    const currentText = useMemo(() => {
        const wordIndex = newPositions.findIndex((it, i) => {
            return frame < newPositions[i] && frame >= (newPositions?.[i - 1] || 0)
        });
        const word = words[wordIndex];
        const frameInWord = frame - (newPositions?.[wordIndex - 1] || 0);

        return word.slice(0, frameInWord > timelinePositions[wordIndex]/2?timelinePositions[wordIndex] - frameInWord: frameInWord);
    }, [frame, newPositions]);
    return (
        <div className={styles.textHolder}>
            <span>{currentText}</span>
            <span className={styles.stick}>|</span>

        </div>

    )
}
