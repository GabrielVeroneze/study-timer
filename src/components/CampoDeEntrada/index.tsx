import './CampoDeEntrada.scss'

interface CampoDeEntradaProps {
    label: string
    children: React.ReactElement
}

const CampoDeEntrada = ({ label, children }: CampoDeEntradaProps) => {    
    return (
        <div className='container'>
            <label className='rotulo'>{label}</label>
            {children}
        </div>
    )
}

export default CampoDeEntrada