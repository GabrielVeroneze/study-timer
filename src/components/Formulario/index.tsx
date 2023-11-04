import { useState } from 'react'
import { ITarefa } from 'interfaces/ITarefa'
import CampoDeEntrada from 'components/CampoDeEntrada'
import Botao from 'components/Botao'
import styles from './Formulario.module.scss'

interface FormularioProps {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

const Formulario = ({ setTarefas }: FormularioProps) => {    
    const [tarefa, setTarefa] = useState<ITarefa>({
        nome: '',
        tempo: '00:00'
    })    

    const adicionarTarefa = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        setTarefas(tarefasAntigas => [...tarefasAntigas, tarefa]);
    }

    return (
        <form className={styles.formulario} onSubmit={adicionarTarefa}>
            <CampoDeEntrada label='Adicione um novo estudo'>
                <input
                    type='text'
                    placeholder='O que você quer estudar'
                    required
                    value={tarefa.nome}
                    onChange={evento => 
                        setTarefa({
                            ...tarefa,
                            nome: evento.target.value
                        })
                    }
                />
            </CampoDeEntrada>
            <CampoDeEntrada label='Tempo'>
                <input
                    type='time'
                    step='1'
                    min='00:00:00'
                    max='01:30:00'
                    required
                    value={tarefa.tempo}
                    onChange={evento => 
                        setTarefa({
                            ...tarefa,
                            tempo: evento.target.value
                        })
                    }
                />
            </CampoDeEntrada>
            <Botao type="submit">Adicionar</Botao>
        </form>
    )
}

export default Formulario
