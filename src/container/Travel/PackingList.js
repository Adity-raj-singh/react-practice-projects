import { useState } from "react";

export default function PackingList({ items, onDeleteItem, handleToggle,handleClearList }) {

    const [sortBy, setSortBy] = useState("input");

    let sortedItems;

    if (sortBy === "input") sortedItems = items;

    if (sortBy === "description")
        sortedItems = items.slice().sort((a, b) => a.description.localeCompare
            (b.description));

    if (sortBy === "packed")
        sortedItems = items
            .slice()
            .sort((a, b) => Number(a.packed) - Number(b.packed));

    return (
        <div id="list-wrapper">
            {sortedItems.map((item) =>
                <ul key={item.id}
                    style={{
                        listStyleType: 'none',
                        width: '20%',
                        transform: 'translate(10px, -150px)',
                    }}>
                    <Item items={item} onDeleteItem={onDeleteItem} handleToggle={handleToggle} />
                </ul>
            )}

            <div style={{ margin: '0px auto', transform: 'translateY(150px)' }}>

                <select style={{ padding: '8px', borderRadius: '30px' }} value={sortBy}
                    onChange={(e) => {
                        setSortBy(e.target.value);
                        console.log(e.target.value)
                    }}
                >
                    <option value="input">Sort By Input Order</option>
                    <option value="description">Sort By Description</option>
                    <option value="packed">Sort By Packed Status</option>
                </select>

                <button onClick={handleClearList} style={{padding: '9px', 
                borderRadius: '30px', 
                border: 'none',
                marginLeft: '30px'}}>Clear List</button>

            </div>
        </div>
    )
}

function Item({ items, onDeleteItem, handleToggle }) {
    return (
        <div>
            <li style={{ color: 'white', fontSize: '18px' }}>
                <input type="checkbox" value={items.packed} onChange={() => handleToggle(items.id)} />
                <span style={items.packed ? { textDecoration: 'line-through' } : {}}>
                    {items.quantity} {" "}{items.description}
                    <button style={{ backgroundColor: 'brown', border: 'none' }} onClick={() => onDeleteItem(items.id)}>❌</button>
                </span>
            </li>
        </div>
    )
}