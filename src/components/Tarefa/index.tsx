import './Tarefa.scss'

interface TarefaProps {
    tarefa: string
    tempo: string
}

const Tarefa = ({ tarefa, tempo }: TarefaProps) => {
    return (
        <li className='item'>
            <h3 className='titulo'>{tarefa}</h3>
            <span className='tempo'>{tempo}</span>
        </li>
    )
}

export default Tarefa
