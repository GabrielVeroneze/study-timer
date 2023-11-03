import Botao from 'components/Botao'
import Relogio from './Relogio'
import styles from './Cronometro.module.scss'

const Cronometro = () => {
    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>
                Escolha um card e inicie o cronômetro
            </p>
            <div className={styles.container}>
                <Relogio />
            </div>
            <Botao>Começar!</Botao>
        </div>
    )
}

export default Cronometro
