import { useState } from "react"
import Form from "./components/form"
import Header from "./components/Header"
import List from "./components/List"
import TotalMoney from "./components/TotalMoney"
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [listTransactions, setListTransactions] = useState([])

  const addTransactionToList = (formData) => {
    const newFormData = { ...formData, id: uuidv4(), transactionValue: Number(formData.transactionValue)};
    setListTransactions([...listTransactions, newFormData])
  }

  const removeTransactionsFromList = (transactionId) => {
    const newListTransactions = listTransactions.filter((transaction) => transaction.id !== transactionId)
    setListTransactions(newListTransactions)
  }

  const totalBalance = () => {
    const incomingTransactions = listTransactions.filter((transaction) => transaction.transactionType === "Entrada")
    const outgoingTransactions = listTransactions.filter((transaction) => transaction.transactionType === "Saida")
    const totalIncoming = incomingTransactions.reduce((previousValue, trans) => previousValue + trans.transactionValue, 0)
    const totalOutgoing = outgoingTransactions.reduce((previousValue, trans) => previousValue + trans.transactionValue, 0)
    const total = totalIncoming - totalOutgoing
    
    return total
  }  

  const total = totalBalance()
  
  return (
    <main>
      <Header />
      <Form addTransactionToList={addTransactionToList} /> 
      <TotalMoney total={total} />
      <h1>Resumo Financeiro</h1>
      <List listTransactions={listTransactions} removeTransactionsFromList={removeTransactionsFromList} />
    </main>
  )
}

export default App
