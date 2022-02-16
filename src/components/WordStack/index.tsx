import React from "react";
import KeyButton from "../common/KeyButton";

import styles from './styles.module.scss';

interface Props {
    wordsStack: string[]
}

const WordStack = ({ wordsStack }: Props) => {
    return (
        <div className={styles.wordStackContainer}>
            {wordsStack.map((a, index) => {
                return (
                    <div className={styles.stackWord}><span>{a}</span></div>
                );
            })}
        </div>
    )
}

export default WordStack;
