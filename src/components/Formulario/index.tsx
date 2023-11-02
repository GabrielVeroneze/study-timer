import CampoDeEntrada from 'components/CampoDeEntrada'
import Botao from 'components/Botao'
import styles from './Formulario.module.scss'

const Formulario = () => {
    return (
        <form className={styles.formulario}>
            <CampoDeEntrada label='Adicione um novo estudo'>
                <input
                    type='text'
                    placeholder='O que você quer estudar'
                    required
                />
            </CampoDeEntrada>
            <CampoDeEntrada label='Tempo'>
                <input
                    type='time'
                    step='1'
                    min='00:00:00'
                    max='01:30:00'
                    required
                />
            </CampoDeEntrada>
            <Botao />
        </form>
    )
}

export default Formulario
