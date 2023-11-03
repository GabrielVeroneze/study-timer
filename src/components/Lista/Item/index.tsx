import styles from './Item.module.scss'

interface ItemProps {
    tarefa: string
    tempo: string
}

const Item = ({ tarefa, tempo }: ItemProps) => {
    return (
        <li className={styles.item}>
            <h3 className={styles.titulo}>{tarefa}</h3>
            <span className={styles.tempo}>{tempo}</span>
        </li>
    )
}

export default Item
