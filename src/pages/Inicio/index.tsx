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

    const finalizarTarefa = () => {
        if (selecionado) {
            setTarefas(tarefasAnteriores => (
                tarefasAnteriores.map(tarefa => {
                    if (tarefa.id === selecionado.id) {
                        return {
                            ...tarefa,
                            selecionado: false,
                            completado: true
                        }
                    }
                    return tarefa
                })
            ))
            setSelecionado(undefined)
        }
    }

    return (
        <main className={styles.inicio}>
            <Formulario setTarefas={setTarefas} />
            <Lista
                tarefas={tarefas}
                selecionaTarefa={selecionaTarefa}
            />
            <Cronometro
                selecionado={selecionado}
                finalizarTarefa={finalizarTarefa}
            />
        </main>
    )
}

export default Inicio