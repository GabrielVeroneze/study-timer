import styles from './CampoDeEntrada.module.scss'

interface CampoDeEntradaProps {
    label: string
    children: React.ReactElement
}

const CampoDeEntrada = ({ label, children }: CampoDeEntradaProps) => {    
    return (
        <div className={styles.container}>
            <label className={styles.rotulo}>{label}</label>
            {children}
        </div>
    )
}

export default CampoDeEntrada