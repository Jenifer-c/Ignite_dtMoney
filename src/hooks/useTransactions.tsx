import { createContext, 
         ReactNode, 
         useContext, 
         useEffect, 
         useState 
       } from "react";

import { api } from "../services/api";


type Transaction = {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string
}

type TransactionsProviderProps = {
    children: ReactNode
}

type TransactionsContextData = {
    transactions: Transaction[];
    createTransaction: (transaction:TransactionInput ) => Promise<void>;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>



    const TransactionsContext = createContext<TransactionsContextData>(
        {}  as TransactionsContextData
    )

    export function TransactionsProvider({children} : TransactionsProviderProps) {
        const [ transactions, setTransactions ] = useState<Transaction[]>([]);

        useEffect(() => {
            api.get( 'transactions' )
            .then(response => setTransactions( response.data.transactions ) )
        }, [])

    async function createTransaction(TransactionInput: TransactionInput) {

       const response = await api.post('/transactions', {
           ...TransactionInput,
           createdAt: new Date(),
       })
       const {transaction} = response.data;

       setTransactions([
           ...transactions,
           transaction,
       ]);
    }

    return (
        <TransactionsContext.Provider value = {{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}
    
    export function useTransactions() {
        const context = useContext(TransactionsContext)

        return context
    }