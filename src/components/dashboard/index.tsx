import React, { useEffect, useState } from "react";
import GradeLevel from "../GradeLevel";
import Keyboard from "../Keyboard";
import WordStack from "../WordStack";
import styles from './styles.module.scss';
import { useDebounce } from 'use-debounce';



const Dasboard = () => {

    const [character, setCharacter] = useState<string>('')
    const [word, setword] = useState<string[]>([])
    const [value] = useDebounce(word.join(''), 1000);
    const wordsStack = ["prince", "sengayire", "Jean luc"];

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener("keydown", function (e) {
                setCharacter(e.key)
            });
        }
        if (character) {
            setword([...word, character])
        }
    }, [character])


    useEffect(() => {

        if (typeof window !== 'undefined' && value) {
            console.log('wordsStack[0] === value', wordsStack[0] === value)
            if (wordsStack[0] === value) {
                delete wordsStack[0]
            }
            window?.responsiveVoice?.speak(value)
            setword([])
        }


    }, [value])
    console.log("word cooore", wordsStack)
    return (<div className={styles.dashboardContainer}>
        <div className={styles.gradeContainer}>
            <GradeLevel />
            <GradeLevel />
            <GradeLevel />
        </div>
        <WordStack wordsStack={wordsStack} />
        <div className={styles.dashboardKeyboard}>
            <Keyboard character={character} />
        </div>
    </div>)
}

export default Dasboard;
