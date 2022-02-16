import React from "react";
import styles from './styles.module.scss'

type Props = {
  key?: number;
  value?: string;
  keyPressed?: boolean
};

const KeyButton = ({ key, value, keyPressed }: Props) => {
  const underlineText = value === 'G' || value === 'J'
  return (
    <div
      key={key}
      className={keyPressed ? styles.pressedKey : styles.keyButtonContainer}
    >
      <span className={underlineText && styles.underlineText || ''}>{value}</span>
    </div>
  );
};

export default KeyButton;
