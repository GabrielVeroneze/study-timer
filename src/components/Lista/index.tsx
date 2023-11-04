import { ITarefa } from 'interfaces/ITarefa';
import Item from './Item'
import styles from './Lista.module.scss'

interface ListaProps {
    tarefas: ITarefa[]
}

const Lista = ({ tarefas }: ListaProps) => {    
    return (
        <aside className={styles.tarefas}>
            <h2 className={styles.titulo}>Estudos do dia</h2>
            <ul className={styles.lista}>
                {tarefas.map((item, index) => (
                    <Item key={index} {...item} />
                ))}
            </ul>
        </aside>
    )
}

export default Lista
