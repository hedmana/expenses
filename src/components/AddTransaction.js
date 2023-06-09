import { useState } from "react";

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    return (  
        <>
            <h3>Läggg till utgift</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">ID</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">€</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <button className="btn">Lägg till utgift</button>
            </form>
        </>
    );
}
 
export default AddTransaction;