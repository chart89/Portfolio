import { useState } from 'react';
import styles from './MainGallery.module.scss'
import clsx from 'clsx';

const MainGallery = () => {

    const [isActiveLe, setActiveLe] = useState(true);
    const [isActiveRh, setActiveRh] = useState(false);
    const [isActiveI, setActiveI] = useState(true);
    const [isActiveII, setActiveII] = useState(true);
    const [isActiveTop, setActiveTop] = useState(true);

    const changeLe =() => {
        setActiveRh(false);
        setActiveLe(true);
        setActiveTop(true);
        setActiveI(true);
        setTimeout(() => {
            setActiveII(true);
          }, 1000);
    }

    const changeRh =() => {
        setActiveLe(false);
        setActiveRh(true);
        setActiveTop(false);
        setTimeout(() => {
            setActiveI(false);
            setActiveII(false);
          }, 1000);
    }

    return (
        <div className={styles.mainGalleryDiv}>
            <div className={clsx(styles.mainGalleryDivLe, isActiveLe && styles.active)} onMouseOver={changeLe}>
                <div className={styles.topInnerDiv}><h1 className={clsx(isActiveTop && styles.active)}>O mnie</h1></div>
                <div className={clsx(styles.leftInnerDivI, isActiveI && styles.active)}></div>
                <div className={clsx(styles.leftInnerDivII, isActiveII && styles.active)}></div>
            </div>
            <div className={styles.mainGalleryCen}></div>
            <div className={clsx(styles.mainGalleryDivRh, isActiveRh && styles.active)} onMouseOver={changeRh}></div>
        </div>
    );
};

export default MainGallery;