import styles from './Botao.module.scss'

interface BotaoProps {
    children: string
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
}

const Botao = ({ children, type = 'button', onClick }: BotaoProps) => {    
    return (
        <button onClick={onClick} type={type} className={styles.botao}>
            {children}
        </button>
    )
}

export default Botao