import React from "react";
import KeyButton from "../common/KeyButton";

import styles from './styles.module.scss';

interface Props {
    wordsStack?: Record<{ [key: string]: string }, unknown>
}

const WordStack = ({ wordsStack }: Props) => {
    return (
        <div className={styles.wordStackContainer}>
            {wordsStack?.data.slice(0, 4).map((a: any) => {
                return (
                    <div key={a._id} className={styles.stackWord}><span>{a.word}</span></div>
                );
            })}
        </div>
    )
}

export default WordStack;
