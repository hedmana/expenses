import { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

// Displays total expenses
const TotalExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (  
        <>
            <h4>totala utgifter</h4>
            <h1 id="total_expenses">{ total }€</h1>
        </>
    );
}
 
export default TotalExpenses;