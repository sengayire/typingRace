import React from "react";
import KeyButton from "../common/KeyButton";

import styles from './styles.module.scss';

const wordsStack = ["Prince", "sengayire", "Jean luc"];

const WordStack = () => {
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
