import { ITarefa } from 'interfaces/ITarefa'
import styles from './Item.module.scss'

const Item = ({ nome, tempo }: ITarefa) => {
    return (
        <li className={styles.item}>
            <h3 className={styles.titulo}>{nome}</h3>
            <span className={styles.tempo}>{tempo}</span>
        </li>
    )
}

export default Item
