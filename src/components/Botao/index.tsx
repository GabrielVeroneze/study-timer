import styles from './Botao.module.scss'

interface BotaoProps {
    children: string
    type?: "button" | "submit" | "reset" | undefined
}

const Botao = ({ children, type = 'button' }: BotaoProps) => {    
    return (
        <button type={type} className={styles.botao}>
            {children}
        </button>
    )
}

export default Botao