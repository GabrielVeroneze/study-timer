import styles from './Relogio.module.scss'

interface RelogioProps {
    tempo: number | undefined
}

const Relogio = ({ tempo = 0 }: RelogioProps) => {
    
    const minutos = Math.floor(tempo / 60)
    const segundos = tempo % 60

    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0')
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0')

    return (
        <>
            <span className={styles.numero}>{minutoDezena}</span>
            <span className={styles.numero}>{minutoUnidade}</span>
            <span className={styles.divisao}>:</span>
            <span className={styles.numero}>{segundoDezena}</span>
            <span className={styles.numero}>{segundoUnidade}</span>
        </>
    )
}

export default Relogio
