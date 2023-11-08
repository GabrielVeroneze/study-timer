import { ITarefa } from 'interfaces/ITarefa'
import styles from './Item.module.scss'

interface ItemProps {
    tarefa: ITarefa
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

const Item = ({ tarefa, selecionaTarefa }: ItemProps) => {
    return (
        <li
            className={`
                ${styles.item}
                ${tarefa.selecionado ? styles.itemSelecionado : ''}
                ${tarefa.completado ? styles.itemCompletado : ''}
            `}
            onClick={() => !tarefa.completado && selecionaTarefa(tarefa)}
        >
            <h3 className={styles.titulo}>{tarefa.nome}</h3>
            <span className={styles.tempo}>{tarefa.tempo}</span>
            {tarefa.completado && (
                <span
                    className={styles.concluido}
                    aria-label='tarefa completada'
                ></span>
            )}
        </li>
    )
}

export default Item
