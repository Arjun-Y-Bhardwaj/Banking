import { useState, createContext } from 'react'
import { v4 } from 'uuid'
import '../css/app.css'
import bg from '../bg.png'
import Header from './Header'
import Sidebar from './Sidebar'
import Transaction from './Transaction'
import HistoryList from './HistoryList'


export const bankContext = new createContext();

function App() {
    const [balance, setBalance] = useState(0)
    const [totalDeposit, setTotalDeposit] = useState(0)
    const [totalWithdraw, setTotalWithdraw] = useState(0)
    const [transactions, setTransactions] = useState(sampleTransaction)

    function handleTransaction(amount, type) {

        if (type === 'd') {
            handleHistoryCreation(amount, type)
            setTotalDeposit(pre => pre + amount)
            setBalance(pre => pre + amount)
        }
        else if (balance >= amount) {
            handleHistoryCreation(amount, type)
            setTotalWithdraw(pre => pre + amount)
            setBalance(pre => pre - amount)
        }
        else {
            alert('Not sufficient balance !')
            // error popup
        }
    }
    function handleHistoryCreation(amount, type) {
        const newTransaction = {
            id: v4(),
            amount: amount,
            type: type,
            day: day,
            time: time
        }
        const newTransactions = [newTransaction, ...transactions];
        setTransactions(newTransactions)
    }
    const date = new Date();

    function makeDate(date) {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let strDate = day + '/' + months[month] + '/' + year;
        return strDate
    }

    function makeTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
        console.log(strTime)
        return strTime;
    }
    const time = makeTime(date);
    const day = makeDate(date);
    const bankContextValue = {
        handleTransaction
    }
    return (
        <bankContext.Provider value={bankContextValue} >
            <img src={bg} alt="hello"  className='img1'/>
            {/* <img src={bg} alt="hello"  className='img1'/> */}
            
            <Header />
            <Sidebar
                balance={balance}
                totalDeposit={totalDeposit}
                totalWithdraw={totalWithdraw}
            />
            <div className='bodd'>
                <Transaction />
                <HistoryList transactions={transactions} />
            </div>
        </bankContext.Provider>
    )
}
const sampleTransaction = [
    //     {
    //         id:v4(),
    //         amount: 200011111111,
    //         type: 'd'
    //     },
    //     {
    //         id:v4(),
    //         amount: 100,
    //         type:'w'
    //     }
]

export default App
