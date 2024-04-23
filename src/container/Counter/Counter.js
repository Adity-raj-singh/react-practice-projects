import { useState } from "react";

export default function Counter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    const today = new Date();
    today.setDate(today.getDate() + count);


    return (
        <div>
            <div>
                <button onClick={() => setStep(step - 1)}>-</button>
                Step: {step}
                <button onClick={() => setStep(step + 1)}>+</button>
            </div>

            <div>
                <button onClick={() => setCount(count - step)}>-</button>
                Count: {count}
                <button onClick={() => setCount(count + step)}>+</button>
            </div>

            <div>
                <span>
                    {count === 0 ?
                        "Today is" :
                        count > 0 ?
                            `${count} days from today is tomorrow` :
                            `${Math.abs(count)} days ago was yesterday`
                    }
                    <span>{today.toDateString()}</span>
                </span>
            </div>
        </div>
    )
}