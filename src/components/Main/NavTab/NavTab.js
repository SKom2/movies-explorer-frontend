import React, { useState } from "react";
import styles from "./NavTab.module.css";

export default function NavTab() {
    const [activeElement, setActiveElement] = useState(null);
    const handleClick = (index) => {
        setActiveElement(index);
    };

    return (
        <ul className={styles.navTab}>
            <li className={activeElement === 0 ? `${styles.navElement} ${styles.clicked}` : styles.navElement}
                onClick={() => handleClick(0)}>
                <a href="#aboutproject" className={styles.navLink}>
                    О проекте
                </a>
            </li>
            <li className={activeElement === 1 ? `${styles.navElement} ${styles.clicked}` : styles.navElement}
                onClick={() => handleClick(1)}>
                <a href="#technologies" className={styles.navLink}>
                    Технологии
                </a>
            </li>
            <li className={activeElement === 2 ? `${styles.navElement} ${styles.clicked}` : styles.navElement}
                onClick={() => handleClick(2)}>
                <a href="#student" className={styles.navLink}>
                    Студент
                </a>
            </li>
        </ul>
    );
}
