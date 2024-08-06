import {ITransaction} from "@/types/transaction.interface";
import getTransactions from "@/app/actions/getTransactions";
import TransactionItem from "@/components/TransactionItem";


const TransactionList = async() =>{
    const {transactions, error} = await getTransactions();
    if(error){
        return <p className="error">{error}</p>
    }
    return (<>
        <h3>History</h3>
        <ul className="list">
            {transactions && transactions.map((transaction: ITransaction)=>(
                <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
        </ul>
    </>);
}

export default TransactionList;