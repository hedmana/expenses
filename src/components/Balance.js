import { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

// Displays the balance between expenses
const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts_axel = [];
    const amounts_moa = [];
    
    transactions.map(transaction => {
        if (transaction.user == 'Axel') {
            amounts_axel.push(transaction.amount);
        }
        else if (transaction.user == 'Moa') {
        amounts_moa.push(transaction.amount);
        }
    });

    const total_expenses_axel = amounts_axel.reduce((acc, item) => (acc += item), 0);
    const total_expenses_moa = amounts_moa.reduce((acc, item) => (acc += item), 0);

    const total_expenses = (total_expenses_axel + total_expenses_moa);
    const to_pay = (total_expenses_axel - total_expenses / 2);

    let status_axel;
    let status_moa;
    if (to_pay < 0) {
        status_axel = "money minus";
        status_moa = "money plus";
    } else if (to_pay > 0) {
        status_axel = "money plus";
        status_moa = "money minus";
    } else{
        status_axel = "money zero";
        status_moa = "money zero";  
    }

    return (  
        <div className="inc-exp-container">
            <div>
                <h4>axel</h4>
                <p className={status_axel}>{to_pay.toFixed(2)}€</p>
            </div>
            <div>
                <h4>moa</h4>
                <p className={status_moa}>{(-to_pay).toFixed(2)}€</p>
            </div>
        </div>

    );
}
 
export default Balance;