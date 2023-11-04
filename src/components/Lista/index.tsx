import { useState } from 'react'
import Item from './Item'
import styles from './Lista.module.scss'

const Lista = () => {
    const [tarefas, setTarefas] = useState([
        {
            tarefa: 'React',
            tempo: '02:00:00',
        },
        {
            tarefa: 'JavaScript',
            tempo: '01:00:00',
        },
        {
            tarefa: 'TypeScript',
            tempo: '03:00:00'
        }
    ])
    
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
