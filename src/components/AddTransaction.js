import { useState, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

// Add transaction functionality 
const AddTransaction = () => {
    const [user, setUser] = useState('Axel')
    const [tag, setTag] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            user,
            tag,
            amount: +amount
        }
        addTransaction(newTransaction);
    }

    return (  
        <>
            <h3>Läggg till utgift</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="user">Vem?</label>
                    <select type="text" name="user" id="user" value={user} onChange={(e) => setUser(e.target.value)}>
                        <option value="Axel">Axel</option>
                        <option value="Moa">Moa</option>
                    </select>
                </div> 
                <div className="form-control">
                    <label htmlFor="tag">Etikett</label>
                    <input type="text" placeholder="..." name="tag" id="tag" value={tag} onChange={(e) => setTag(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">€</label>
                    <input type="number" name="amount" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <button className="btn">Lägg till utgift</button>
            </form>
        </>
    );
}
 
export default AddTransaction;