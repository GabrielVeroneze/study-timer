import styles from './Botao.module.scss'

interface BotaoProps {
    children: string
}

const Botao = ({ children }: BotaoProps) => {    
    return (
        <button className={styles.botao}>
            {children}
        </button>
    )
}

export default Botao