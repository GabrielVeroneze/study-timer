import Formulario from "components/Formulario"
import Lista from "components/Lista"
import Cronometro from "components/Cronometro"
import styles from './Inicio.module.scss'

const Inicio = () => {
    return (
        <main className={styles.inicio}>
            <Formulario />
            <Lista />
            <Cronometro />
        </main>
    )
}

export default Inicio