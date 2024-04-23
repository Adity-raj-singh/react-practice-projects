import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import './Travel.css';

export default function Travel() {
    const [items, setItems] = useState([]);

    function handleAddItems(item) {
        setItems((items) => [...items, item])
    }

    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id))
        // console.log('id: ', id);
        // // console.log('item.id: ', item.id);
        // const a = items.map((item)=> console.log(item.id))
        // console.log('a: ', a);
    }

    function handleToggle(id) {
        setItems((items) => items.map((item) =>
            item.id === id ?
                { ...item, packed: !item.packed } : item
        ));
    }

    function handleClearList() {
        const confirmed =
            window.confirm("Are you sure you want to delete all items?");
        if (confirmed) setItems([]);
    }

    return (
        <div>
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList items={items} onDeleteItem={handleDeleteItem}
                handleToggle={handleToggle}
                handleClearList={handleClearList}
            />
            <Stats items={items} />
        </div>
    )
}