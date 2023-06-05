const TotalMoney = ({total}) => {
    return (
        <section className="section__totalMoney">
            <h3>Valor Total: <span className="total__money">R$ {total},00</span></h3>
            <p>O valor se refere ao saldo</p>
        </section>
    )
}

export default TotalMoney;