import React from 'react';
import styles from './Modal.module.scss'

const Modal = () => {
    const [open, setOpen] = React.useState(false)
    return (
        <div className={styles.App}>
            <button onClick={() => setOpen(true)} className={styles['open-modal-btn']}>Login</button>
            {
                open && (

                    <div className={styles.overlay}>
                        <div className={styles.modal}>
                            <svg  onClick={() => setOpen(false)} height="50" viewBox="0 0 200 200" width="50">
        
                                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                            </svg>
        
                        </div>
                    </div>
                    )
                }
                </div>
    );
}

export default Modal;
