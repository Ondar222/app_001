import React from 'react';
// import logoImage from ".../assets/edgio.svg"
import menu from './menu';
import styles from './Header.module.scss'
import Modal from '../Modal/Login';
import Help from '../Modal/Help'

const Header = () => {
   
    return <div className={styles.header}>
        <div className={styles.logo}>
            <img style={{ height: "50px" }} src="https://cdn.svgporn.com/logos/edgio.svg" alt="" />
        </div>
        <div className={styles.wrapper}>
            <ul className={styles.menu}>
                {menu.map((item, idx) => (

                    <li key={`menu, item ${idx}`}>
                        <a href={item.link}>{item.title}</a>
                    </li>
                ))}
            </ul>
            <div className={styles.buttons}>
                <button className={styles['login-button']}>
                    <Modal />
                </button>
                <button className={styles['sign-up-button']}>
                    <Help />
                </button>
            </div>
        </div>
    </div>

}

export default Header;
