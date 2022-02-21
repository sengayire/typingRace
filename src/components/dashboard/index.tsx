import React, { useEffect, useState } from "react";
import GradeLevel from "../GradeLevel";
import Keyboard from "../Keyboard";
import WordStack from "../WordStack";
import styles from './styles.module.scss';
import { useDebounce } from 'use-debounce';
import * as request from '../../queryHooks/interfaces/useRequest';
import { GET_WORDS } from "../../queryHooks/constants/storeKeys";




const Dasboard = () => {

    const [character, setCharacter] = useState<string>('')
    const [word, setword] = useState<string[]>([])
    const [value] = useDebounce(word.join(''), 1000);

    const { data: wordsStack } = request.useGetRequest('/words', GET_WORDS);

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
            window?.responsiveVoice?.speak(value)
            setword([])
        }


    }, [value])

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
