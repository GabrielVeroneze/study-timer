import { useState } from "react"
import { ITarefa } from "interfaces/ITarefa"
import Formulario from "components/Formulario"
import Lista from "components/Lista"
import Cronometro from "components/Cronometro"
import styles from './Inicio.module.scss'

const Inicio = () => {
    const [tarefas, setTarefas] = useState<ITarefa[]>([])
    const [selecionado, setSelecionado] = useState<ITarefa>()
    
    const selecionaTarefa = (tarefaSelecionada: ITarefa) => {
        setSelecionado(tarefaSelecionada)

        setTarefas(tarefasAnteriores => (
            tarefasAnteriores.map(tarefa => ({
                ...tarefa,
                selecionado: tarefa.id === tarefaSelecionada.id ? true : false
            }))
        ))
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