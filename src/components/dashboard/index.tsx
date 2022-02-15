import React from "react";
import GradeLevel from "../GradeLevel";
import Keyboard from "../Keyboard";
import WordStack from "../WordStack";
import styles from './styles.module.scss';

const Dasboard = () => {
    return (<div className={styles.dashboardContainer}>
        <div className={styles.gradeContainer}>
            <GradeLevel />
            <GradeLevel />
            <GradeLevel />
        </div>
        <WordStack />
        <div className={styles.dashboardKeyboard}>
            <Keyboard />
        </div>
    </div>)
}

export default Dasboard;
