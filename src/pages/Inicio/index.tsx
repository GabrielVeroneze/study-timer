import Formulario from "components/Formulario"
import Lista from "components/Lista"
import styles from './Inicio.module.scss'

const Inicio = () => {
    return (
        <main className={styles.inicio}>
            <Formulario />
            <Lista />
        </main>
    )
}

export default Inicio