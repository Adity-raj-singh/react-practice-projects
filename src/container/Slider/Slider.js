import { useState } from "react";

export default function Slider() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    const today = new Date();
    today.setDate(today.getDate() + count);

    function handleReset() {
        setStep(1);
        setCount(0);
    }

    return (
        <div>
            <div>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={step}
                    onChange={(e) => setStep(Number(e.target.value))}
                />
                Step: {step}
            </div>

            <div>
                <button onClick={() => setCount(count - step)}>-</button>
                <input
                    type="text"
                    value={count}
                    onChange={(e) => setCount(Number((e.target.value)))}
                />
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

            {(step !== 1 || count !== 0) ?
                (<div>
                    <button onClick={handleReset}>Reset</button>
                </div>) : null
            }
        </div>
    )
}