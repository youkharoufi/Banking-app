import React from 'react';
import Button from './Button';
import styles from '../CSS/ErrorModal.module.css';
import Card from './Card';

const NotificationWithdraw=(props)=>{

    return(
        <div>
            <div className={styles.backdrop} onClick={props.onConfirm}>
                <Card className={styles.modal}>
                    <header className={styles.header}>
                        <h2>{props.title}</h2>
                    </header>
                    <div className={styles.content}>
                        <p>{props.message}</p>
                    </div>
                    <footer className={styles.actions}>
                        <Button onClick={props.onConfirm}>OK</Button>
                    </footer>
                </Card>
            </div>
        </div>
    )
}

export default NotificationWithdraw;