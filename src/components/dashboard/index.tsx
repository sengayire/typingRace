import React, { useEffect, useState } from "react";
import GradeLevel from "../GradeLevel";
import Keyboard from "../Keyboard";
import WordStack from "../WordStack";
import styles from './styles.module.scss';


const Dasboard = () => {

    const [character, setCharacter] = useState('')



    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener("keydown", function (e) {
                setCharacter(e.key)
            });
            window?.responsiveVoice?.speak(character)
        }
    }, [character])
    return (<div className={styles.dashboardContainer}>
        <div className={styles.gradeContainer}>
            <GradeLevel />
            <GradeLevel />
            <GradeLevel />
        </div>
        <WordStack />
        <div className={styles.dashboardKeyboard}>
            <Keyboard character={character} />
        </div>
    </div>)
}

export default Dasboard;
