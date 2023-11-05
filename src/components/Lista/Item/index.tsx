import { ITarefa } from 'interfaces/ITarefa'
import styles from './Item.module.scss'

interface ItemProps {
    tarefa: ITarefa
    selecionaTarefa: (tarefa: ITarefa) => void
}

const Item = ({ tarefa, selecionaTarefa }: ItemProps) => {
    return (
        <li
            className={styles.item}
            onClick={() => selecionaTarefa(tarefa)}
        >
            <h3 className={styles.titulo}>{tarefa.nome}</h3>
            <span className={styles.tempo}>{tarefa.tempo}</span>
        </li>
    )
}

export default Item
