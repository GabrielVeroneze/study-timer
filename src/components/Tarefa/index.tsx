import styles from './Tarefa.module.scss'

interface TarefaProps {
    tarefa: string
    tempo: string
}

const Tarefa = ({ tarefa, tempo }: TarefaProps) => {
    return (
        <li className={styles.item}>
            <h3 className={styles.titulo}>{tarefa}</h3>
            <span className={styles.tempo}>{tempo}</span>
        </li>
    )
}

export default Tarefa
