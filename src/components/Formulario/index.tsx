import Botao from "components/Botao"

const Formulario = () => {
    return (
        <form>
            <div>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    required
                />
            </div>
            <div>
                <label htmlFor="tempo">Tempo</label>
                <input
                    type="time"
                    name="tempo"
                    id="tempo"
                    step="1"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Botao />
        </form>
    )
}

export default Formulario