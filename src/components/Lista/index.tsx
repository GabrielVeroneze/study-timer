import { ITarefa } from 'interfaces/ITarefa';
import Item from './Item'
import styles from './Lista.module.scss'

interface ListaProps {
    tarefas: ITarefa[]
    selecionaTarefa: (tarefa: ITarefa) => void
}

const Lista = ({ tarefas, selecionaTarefa }: ListaProps) => {
    return (
        <aside className={styles.tarefas}>
            <h2 className={styles.titulo}>Estudos do dia</h2>
            <ul className={styles.lista}>
                {tarefas.map(item => (
                    <Item
                        key={item.id}
                        tarefa={item}
                        selecionaTarefa={selecionaTarefa}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista
