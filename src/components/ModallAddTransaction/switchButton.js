import React from 'react';
import styles from './switchButton.module.css';
// import { ReactComponent as Plus } from '../images/plus.svg';
// import { ReactComponent as Minus } from '../images/minus.svg';
import { useState } from 'react';

function SwitchButton() {
  const [activeSwitch, setActiveSwitch] = useState(false);

  const toggleSwitch = () => {
    setActiveSwitch(prevState => !prevState);
  };

  return (
    <div className={styles.switch} onClick={toggleSwitch}>
      <div
        className={`${styles.knob} ${activeSwitch ? styles.active : ''}`}
      ></div>
    </div>
  );
}

export default SwitchButton;
