import { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

// Displays transaction history
const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (  
        <>
            <h3>Historik</h3>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
            </ul>
        </>
    );
}
 
export default TransactionList;