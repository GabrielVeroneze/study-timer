import { useState } from "react"
import { ITarefa } from "interfaces/ITarefa"
import Formulario from "components/Formulario"
import Lista from "components/Lista"
import Cronometro from "components/Cronometro"
import styles from './Inicio.module.scss'

const Inicio = () => {
    const [tarefas, setTarefas] = useState<ITarefa[]>([])
    const [selecionado, setSelecionado] = useState<ITarefa>()
    
    const selecionaTarefa = (tarefa: ITarefa) => {
        setSelecionado(tarefa);
    }

    return (
        <main className={styles.inicio}>
            <Formulario setTarefas={setTarefas} />
            <Lista
                tarefas={tarefas}
                selecionaTarefa={selecionaTarefa}
            />
            <Cronometro />
        </main>
    )
}

export default Inicio