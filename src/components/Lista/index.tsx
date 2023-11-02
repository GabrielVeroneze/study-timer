import Tarefa from 'components/Tarefa'
import './Lista.scss'

const Lista = () => {
    const tarefas = [
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
    ]
    
    return (
        <aside className='tarefas'>
            <h2 className='titulo'>Estudos do dia</h2>
            <ul className='lista'>
                {tarefas.map((item, index) => (
                    <Tarefa key={index} {...item} />
                ))}
            </ul>
        </aside>
    )
}

export default Lista
