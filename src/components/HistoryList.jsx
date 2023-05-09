import React from 'react'
import HistoryItem from './HistoryItem'

export default function HistoryList({ transactions }) {
    const historyList = transactions.map(transaction => {
        return (< HistoryItem key={transaction.id} transaction={transaction} />)
    })
    return (
        <div className='history-list'>
            {historyList}
        </div>
    )
}
