import styles from './Relogio.module.scss'

const Relogio = () => {
    return (
        <>
            <span className={styles.numero}>0</span>
            <span className={styles.numero}>0</span>
            <span className={styles.divisao}>:</span>
            <span className={styles.numero}>0</span>
            <span className={styles.numero}>0</span>
        </>
    )
}

export default Relogio
