import { useState } from 'react';
import './Steps.css';

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
]

export default function Steps() {
    const [step, setStep] = useState(1);
    const [test, setTest] = useState({ name: "Adity" });
    const [isOpen, setisOpen] = useState(true);

    function handlePrevious() {
        if (step > 1) {
            setStep((s) => s - 1);
        }
    }

    function handleNext() {
        if (step < 3) {
            setStep((s) => s + 1);
            setTest({ name: "Sanaya" });
        }
    }


    return (
        <>
            <button className='btn' onClick={() => setisOpen((is) => !is)}>&times;</button>
            {
                isOpen &&
                (<div id="steps-wrapper">
                    <div className='numbers'>
                        <div className={`${step >= 1 ? "num" : "num-notactive"}`}>1</div>
                        <div className={`${step >= 2 ? "num" : "num-notactive"}`}>2</div>
                        <div className={`${step >= 3 ? "num" : "num-notactive"}`}>3</div>
                    </div>

                    <StepMessage step={step}>
                        {messages[step - 1]}
                        {test.name}
                        <Button
                            onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
                        >
                            Learn How
                        </Button>
                    </StepMessage>

                    <StepMessage step={2}>
                        <h3>Pass In Content 🤞</h3>
                    </StepMessage>

                    <StepMessage step={3}>
                        <h3>Read Children Prop 😎</h3>
                    </StepMessage>

                    <div id="btn-wrapper">
                        <Button bgColor="#7950f2"
                            textColor="#fff"
                            onClick={handlePrevious}
                            className='btn-style'
                        ><span>👈</span>Previous</Button>

                        <Button bgColor="#7950f2"
                            textColor="#fff"
                            onClick={handleNext}
                            className='btn-style'
                        >Next<span>👉</span></Button>
                    </div>
                </div>
                )
            }
        </>
    )
}


function Button({ bgColor, textColor, onClick, children, className }) {
    return (
        <button style={{ backgroundColor: bgColor, color: textColor }}
            onClick={onClick} className={className}>{children}</button>
    )
}

function StepMessage({ step, children }) {
    return (
        <p>
            <h3> Step {step}:</h3>
            {children}
        </p>
    )
}