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
                className='sidebar-item s-i-bal'
            >
                <div s-i-bal-item>Balance:&nbsp;</div> 
                <div s-i-bal-item> ₹ {balance}</div>
            </div>
            <div
                className='sidebar-item s-i-d'
            >
                <div>Total Deposit:&nbsp;</div>
                <div>₹ {totalDeposit}</div>
            </div>
            <div
                className='sidebar-item s-i-w'
            >
                <div>Total Withdrawl:&nbsp;</div>
                <div>₹ {totalWithdraw}</div>
            </div>
        </div>
    )
}
