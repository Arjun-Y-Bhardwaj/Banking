import React from 'react'

export default function HistoryItem({ transaction }) {
    const {
        amount,
        time,
        day
    } = transaction;
    const type = (transaction.type === 'd') ? 'Deposited' : 'Withdrawn'

    function giveDiv() {
        if (transaction.type === 'd') {
            return (
                <div className='history-main history-main-deposit'>
                    <div className='history-item'>
                        <div className='history-item-amount'>₹ {amount}</div>
                        <div className='history-item-type'>{type}</div>
                    </div>
                    <div className='history-time-stamp'>
                        <div className='history-time-stamp-item ss-time'>{time}</div>
                        <div className='history-time-stamp-item ss-day'>{day}</div>


                    </div>
                </div>
            )
        }
        else {
            return (
                <div className='history-main history-main-withdraw'>
                    <div className='history-item'>
                        <div className='history-item-amount'>₹ {amount}</div>
                        <div className='history-item-type'>{type}</div>
                    </div>
                    <div className='history-time-stamp'>
                        <div className='history-time-stamp-item ss'>{time}</div>
                        <div className='history-time-stamp-item ss'>{day}</div>


                    </div>
                </div>
            )
        }
    }

    return (
        <>
        {giveDiv()}
        </>
    )
}
