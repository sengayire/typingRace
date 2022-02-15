import React from "react";
import styles from './styles.module.scss'

type Props = {
  key?: number;
  value?: string;
};

const KeyButton = ({ key, value }: Props) => {
  const underlineText = value === 'G' || value === 'J'
  return (
    <div
      key={key}
      className={styles.keyButtonContainer}
    >
      <span className={underlineText && styles.underlineText || ''}>{value}</span>
    </div>
  );
};

export default KeyButton;
