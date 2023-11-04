import { useState } from "react"
import { ITarefa } from "interfaces/ITarefa"
import Formulario from "components/Formulario"
import Lista from "components/Lista"
import Cronometro from "components/Cronometro"
import styles from './Inicio.module.scss'

const Inicio = () => {
    const [tarefas, setTarefas] = useState<ITarefa[]>([
        {
            nome: 'React',
            tempo: '02:00:00',
        },
        {
            nome: 'JavaScript',
            tempo: '01:00:00',
        },
        {
            nome: 'TypeScript',
            tempo: '03:00:00'
        }
    ])

    return (
        <main className={styles.inicio}>
            <Formulario />
            <Lista tarefas={tarefas} />
            <Cronometro />
        </main>
    )
}

export default Inicio