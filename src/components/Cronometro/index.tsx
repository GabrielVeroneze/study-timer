import { useEffect, useState } from 'react'
import { ITarefa } from 'interfaces/ITarefa'
import { tempoParaSegundos } from 'common/utils/time'
import Botao from 'components/Botao'
import Relogio from './Relogio'
import styles from './Cronometro.module.scss'

interface CronometroProps {
    selecionado: ITarefa | undefined
}

const Cronometro = ({ selecionado }: CronometroProps) => {
    const [tempo, setTempo] = useState<number>()

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])

    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>
                Escolha um card e inicie o cronômetro
            </p>
            <div className={styles.container}>
                <Relogio tempo={tempo} />
            </div>
            <Botao>Começar!</Botao>
        </div>
    )
}

export default Cronometro
