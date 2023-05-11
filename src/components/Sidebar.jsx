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
                <div >Balance:&nbsp;</div> 
                <div className='s-i-amt'> ₹ {balance}</div>
            </div>
            <div
                className='sidebar-item s-i-d'
            >
                <div>Total Deposit:&nbsp;</div>
                <div className='s-i-amt'>₹ {totalDeposit}</div>
            </div>
            <div
                className='sidebar-item s-i-w'
            >
                <div>Total Withdrawl:&nbsp;</div>
                <div className='s-i-amt'>₹ {totalWithdraw}</div>
            </div>
        </div>
    )
}
