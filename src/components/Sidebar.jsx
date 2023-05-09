import React from 'react'

export default function Sidebar(props) {
    const {
        balance,
        totalDeposit,
        totalWithdraw
    } = props
    return (
        <div className='sidebar'>
            <div
                className='sidebar-item'
            >
                <div>Balance:&nbsp;</div> 
                <div> ₹ {balance}</div>
            </div>
            <div
                className='sidebar-item'
            >
                <div>Total Deposit:&nbsp;</div>
                <div>₹ {totalDeposit}</div>
            </div>
            <div
                className='sidebar-item'
            >
                <div>Total Withdrawl:&nbsp;</div>
                <div>₹ {totalWithdraw}</div>
            </div>
        </div>
    )
}
