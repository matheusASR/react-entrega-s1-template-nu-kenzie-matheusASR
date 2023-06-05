const Card = ({transaction, removeTransactionsFromList}) => {
    return (
        <li className="cardTransaction">
            <span className="trans__description">{transaction.transactionDescription}</span>
            <span className="trans__type">{transaction.transactionType}</span>
            <span className="trans__value">R$ {transaction.transactionValue},00</span>
            <button className="trans__button" onClick={() => removeTransactionsFromList(transaction.id)}>Excluir</button>
        </li>
    )
}

export default Card;