import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
    return (
        <div style={{ margin: '100px auto', backgroundColor: 'lightblue', padding: '100px' }}>
            <TipCalculator />
        </div>
    )
}

function TipCalculator() {
    const [bill, setBill] = useState('');
    const [service, setService] = useState(0);
    const [likeService, setLikeService] = useState(0);

    const tip = bill * ((service + likeService) / 2 / 100);

    function handleReset() {
        setBill('');
        setService(0);
        setLikeService(0);
    }

    return (
        <div>
            <BillCalculator bill={bill} onSetBill={setBill} />
            <ServiceCalculator service={service} onSetService={setService} />
            <LikeServiceCalculator likeService={likeService} onLikeService={setLikeService} />

            {bill > 0 &&
                <>
                    <PayCalculator bill={bill} tip={tip} />
                    <ResetButton onHandleReset={handleReset} />
                </>
            }
        </div>
    )
}

function BillCalculator({ bill, onSetBill }) {
    return (
        <div>
            <label>How much was the bill?</label>
            <input type='number' placeholder='Bill Value' value={bill}
                onChange={(e) => onSetBill(Number(e.target.value))} />
        </div>
    )
}

function ServiceCalculator({ service, onSetService }) {
    return (
        <div>
            <label>How did you like the service?</label>
            <select value={service} onChange={(e) => onSetService(Number(e.target.value))}>
                <option value='0'>Dissatisfied (0%)</option>
                <option value='5'>It was okay (5%)</option>
                <option value='10'>It was good (10%)</option>
                <option value='20'>Absolutely amazing! (20%)</option>
            </select>
        </div>
    )
}

function LikeServiceCalculator({ likeService, onLikeService }) {
    return (
        <div>
            <label>How did your friend like the service?</label>
            <select value={likeService} onChange={(e) => onLikeService(Number(e.target.value))}>
                <option value='0'>Dissatisfied (0%)</option>
                <option value='5'>It was okay (5%)</option>
                <option value='10'>It was good (10%)</option>
                <option value='20'>Absolutely amazing! (20%)</option>
            </select>
        </div>
    )
}

function PayCalculator({ bill, tip }) {
    return (
        <div>
            <h2>You pay ${bill + tip} (${bill} + ${tip} tip)</h2>
        </div>
    )
}

function ResetButton({ onHandleReset }) {
    return (
        <button onClick={onHandleReset}>Reset</button>
    )
}



export default Calculator;