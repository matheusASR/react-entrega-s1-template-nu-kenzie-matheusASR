import Card from '../Card'

const List = ({listTransactions, removeTransactionsFromList}) => {
    return (
      <>
        {listTransactions.length > 0 ? (
          <ul className="transactions__list" >
            {listTransactions.map((trans) => {
                return (
                  <Card
                      key={trans.id}
                      transaction={trans}
                      removeTransactionsFromList ={removeTransactionsFromList}
                  />
                );
            })}
          </ul>
        ) : (
          <p className="no__content">Você ainda não possui nenhum lançamento</p>
        )}
      </>
    )
}

export default List;