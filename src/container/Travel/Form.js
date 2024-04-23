import { useState } from "react";

export default function Form({ onAddItems }) {

    const [description, setDescription] = useState("");
    // console.log('description: ', description);
    const [quantity, setQuantity] = useState(1);
    // console.log('quantity: ', quantity);

    function handleSubmit(e) {
        e.preventDefault();

        if (!description) return;

        const newItem = {
            description,
            quantity,
            packed: false,
            id: Date.now()
        };
        
        onAddItems(newItem);
        setDescription("");
        setQuantity(1);
    }

    return (
        <form id="form-wrapper" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select value={quantity} onChange={(e) => { setQuantity(Number(e.target.value)); console.log(e.target.value) }}
                style={{ width: '55px', height: '30px', borderRadius: '15px', transform: 'translate(10px, 20px)', border: 'white' }}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) =>
                    <option value={num} key={num}>
                        {num}
                    </option>
                )}
            </select>
            <input type="text" placeholder="Item..."
                style={{ width: '170px', height: '27px', borderRadius: '30px', transform: 'translate(-150px, 20px)', border: 'white' }}
                value={description}
                onChange={(e) => { setDescription(e.target.value); console.log(e.target.value) }}
            />
            <button
                style={{ width: '60px', height: '27px', borderRadius: '30px', transform: 'translate(-200px, 20px)', border: 'white', backgroundColor: 'skyblue' }}
            >
                Add
            </button>
        </form>
    )
}