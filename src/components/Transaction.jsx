import React, { useContext, useState, useRef } from 'react'
import { bankContext } from './App'

export default function Transaction() {
    const { handleTransaction } = useContext(bankContext);

    const inputRef = useRef()

    function handleSubmission(type) {
        handleBlur();
        const curAmount = parseInt(inputRef.current.value);
        if (isNaN(curAmount)) {
            //error popup
        }
        else if (curAmount > 0) {
            handleTransaction(curAmount, type)
        }
        inputRef.current.value = ''
    }
   
    function handleBlur() {
        const curAmount = parseInt(inputRef.current.value);
        if (curAmount > 9999) {
            console.log('fuck');
            inputRef.current.value = ''
            return (alert('Transaction Limit is 9999'))
        }
    }
    return (
        <div className='transaction-main'>
            <div className='transaction-amount-input-label'>
                <label htmlFor="transaction">AMOUNT : </label>
                <input
                    type="number"
                    min={1}
                    max={9999}
                    id="transaction-input"
                    className="transaction-input"
                    ref={inputRef}
                    inputMode="numeric"
                    required
                />
            </div>
            <div className='transaction-submit'>
                <button
                    className='btn btn-deposit'
                    onClick={() => handleSubmission('d')}
                >
                    DEPOSIT
                </button>
                <button
                    className='btn btn-withdraw'
                    onClick={() => handleSubmission('w')}
                >
                    WITHDRAW
                </button>
            </div>
        </div>
    )
}
