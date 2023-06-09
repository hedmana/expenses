import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
    transactions: [
        { id: 1, user: 'axel', text: 'Flower', amount: 20 },
        { id: 2, user: 'axel', text: 'Camera', amount: 150 },
        { id: 3, user: 'moa', text: 'Camera', amount: 150 }
    ]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>)
}