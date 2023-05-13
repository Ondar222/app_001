import React from 'react';
// import logoImage from ".../assets/edgio.svg"
import menu from './menu';
import styles from './Header.module.scss'
import Modal from '../Modal/Login';
import Help from '../Modal/Help'

const Header = () => {
  

        const [City, setCity] = React.useState('Найти')

    React.useEffect(() => {
        if(City === 'Novosibirsk') console.log(City)
    }, [City])
    return <div className={styles.header}>
        <div className={styles.logo}>
            <img style={{ height: "50px" }} src="https://cdn.svgporn.com/logos/apple-pay.svg" alt="" />
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
                <input type="text" value={City} onChange={(e) => setCity(e.target.value)} placeholder='Enter city' />
            </div>
        </div>
    </div>

}

export default Header;
