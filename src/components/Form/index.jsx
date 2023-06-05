import { useState } from "react";

const Form = ({addTransactionToList}) => {
    const [formData, setFormData] = useState({
        transactionDescription: "",
        transactionValue: "",
        transactionType: "",
    });

    const submit = (event) => {
        event.preventDefault();
        addTransactionToList(formData)
    }

    return (
        <form className="form" onSubmit={submit}>
            <label>Descrição</label>
            <input type="text" placeholder="Digite aqui sua descrição..." value={formData.transactionDescription} onChange={(event) => setFormData({ ...formData, transactionDescription: event.target.value})} required/>
            <label>Valor (R$)</label>
            <input type="number" placeholder="Digite aqui o valor..." value={formData.transactionValue} onChange={(event) => setFormData({ ...formData, transactionValue: event.target.value})} required min={0}/>
            <label>Tipo de valor</label>
            <select name="type" id="type" value={formData.transactionType} onChange={(event) => setFormData({ ...formData, transactionType: event.target.value })} required>
                <option value="null">Selecione o tipo da transação</option>
                <option value="Entrada">Entrada</option>
                <option value="Saida">Saida</option>
            </select>
            <button type="submit">Inserir valor</button>
        </form>
    )
}

export default Form;