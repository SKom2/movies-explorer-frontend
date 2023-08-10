// Preloader.jsx
import React from 'react';
import styles from './Preloader.module.css';

export default function Preloader() {
    return (
        <div className={styles.preloader}>
            <div className={styles.preloaderLoader}>
                <div className={styles.loaderElement}></div>
            </div>
        </div>
    );
}
