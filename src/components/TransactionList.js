const TransactionList = () => {
    return (  
        <>
            <h3>Historik</h3>
            <ul id = "list" className="list">
                <li className="minus">
                    Cash <span>-400€</span><button className="delete-btn">x</button>
                </li>
            </ul>
        </>
    );
}
 
export default TransactionList;