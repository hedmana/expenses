import { useState } from "react";

// Add transaction functionality 
const AddTransaction = () => {
    const [user, setUser] = useState('')
    const [id, setId] = useState('');
    const [amount, setAmount] = useState(0);

    return (  
        <>
            <h3>Läggg till utgift</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="user">Vem?</label>
                    <select type="text" name="user" id="user" value={user} onChange={(e) => setUser(e.target.value)}>
                        <option value="axel">Axel</option>
                        <option value="moa">Moa</option>
                    </select>
                </div> 
                <div className="form-control">
                    <label htmlFor="id">Etikett</label>
                    <input type="text" name="id" id="id" value={id} onChange={(e) => setId(e.target.value)}/>
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