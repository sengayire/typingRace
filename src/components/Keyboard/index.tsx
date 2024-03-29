import React from "react";
import KeyButton from "../common/KeyButton";
import styles from './styles.module.scss';

const buttonKeys = [["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
["A", "S", "D", "F", "G", "H", "J", "K", "L"],
["Z", "X", "C", "V", "B", "N", "M"],]

interface Props {
    character: string
}

const Keyboard = ({ character }: Props) => {



    return (
        <div>
            <div className={styles.keysGroupContainer}>
                {buttonKeys[0].map((a, index) => {
                    return (
                        <KeyButton key={index} value={a} keyPressed={character.toUpperCase() === a.toUpperCase()} />
                    );
                })}
            </div>
            <div className={styles.keysGroupContainer} style={{ marginLeft: 20 }}>
                {buttonKeys[1].map((a, index) => {
                    return (
                        <KeyButton key={index} value={a} keyPressed={character.toUpperCase() === a.toUpperCase()} />
                    );
                })}
            </div>
            <div className={styles.keysGroupContainer} style={{ paddingLeft: 50 }} >
                {buttonKeys[2].map((a, index) => {
                    return (
                        <KeyButton key={index} value={a} keyPressed={character.toUpperCase() === a.toUpperCase()} />
                    );
                })}
            </div>
        </div>
    )

}

export default Keyboard;
