import React, { useEffect, useState } from 'react';
import './UserDetailForm.css';

function UserDetailForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [cards, setCards] = useState([]);

    const [searchQuery, setSearchQuery] = useState('');

    const [sortedCards, setSortedCard] = useState(cards);

    const [sortData, setSortData] = useState('');

    const [editable, setEditable] = useState(null);


    useEffect(() => {
        setSortedCard(cards)
    }, [cards])

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !email || !password || !phone || !age) return;
        const newCard = { id: Date.now(), name, email, password, phone, age };

        setCards([...cards, newCard]);
        setName('');
        setEmail('');
        setPassword('');
        setPhone('');
        setAge('');
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (!name || !email || !password || !phone || !age) return;

    //     const newCard = { id: Date.now(), name, email, password, phone, age };
    //     setCards([...cards, newCard]);
    //     setName('');
    //     setEmail('');
    //     setPassword('');
    //     setPhone('');
    //     setAge('');
    // };

    const handleDelete = (id) => {
        setCards((cards) => cards.filter((card) => card.id !== id));
    }

    // const handleDelete = (id) => {
    //     setCards((cards) => cards.filter((card) => card.id !== id));
    // }

    const filterData = (e) => {
        setSearchQuery(e.target.value);
        const filtered = cards.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setSortedCard(filtered);
    }

    // const filterData = (e) => {
    //     setSearchQuery(e.target.value);
    //     const filtered = cards.filter((item) => item.name.toLowercase().includes(e.target.value.toLowercase()));
    //     setSortedCard(filtered);
    // }

    const handleSearch = (e) => {
        setSortData(e.target.value);

        let filterItems = e.target.value;

        if (filterItems === "name") {
            let sortedSearchCards = cards.slice().sort((a, b) => a.name.localeCompare(b.name))
            setSortedCard(sortedSearchCards);
        }
        if (filterItems === "age") {
            let sortedSearchCards = cards.slice().sort((a, b) => Number(a.age) - Number(b.age));
            setSortedCard(sortedSearchCards);
        }
        if (filterItems === "number") {
            let sortedSearchCards = cards.slice().sort((a, b) => Number(a.phone) - Number(b.phone));
            setSortedCard(sortedSearchCards);
        }
    }

    const handleEditClick = (id) => {
        setEditable(id);
    };

    const handleEditChanges = (e, cardId) => {

        let targetCardIndex = sortedCards.findIndex((item) => item.id === cardId);

        const updatedCards = [...cards];

        updatedCards[targetCardIndex] = {
            ...updatedCards[targetCardIndex],
            [e.target.id]: e.target.value
        };
        setCards(updatedCards)
    }


    return (
        <form onSubmit={handleSubmit}>
            <div style={{
                diaplay: 'flex',
            }}>
                <div id='formWrapper'>
                    <div className='formStyle'>
                        <label htmlFor='name' className='labelText'>Name: </label>
                        <input type='text' id='name' placeholder='Enter Name' className='inputStyle'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='formStyle'>
                        <label htmlFor='email' className='labelText'>Email: </label>
                        <input type='email' id='email' placeholder='Enter Email' className='inputStyle'
                            value={email} onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='formStyle'>
                        <label htmlFor='password' className='labelText'>Password: </label>
                        <input type='password' id='password' placeholder='Enter Password' className='inputStyle'
                            value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='formStyle'>
                        <label htmlFor='phone' className='labelText'>Phone: </label>
                        <input type='tel' id='phone' placeholder='Enter Phone' className='inputStyle'
                            value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className='formStyle'>
                        <label htmlFor='age' className='labelText'>Age: </label>
                        <input type='number' id='age' placeholder='Enter Age' className='inputStyle'
                            value={age} onChange={(e) => setAge(e.target.value)}
                        />
                    </div>

                    <div>
                        <button type='submit' id="btnSubmit">Submit</button>
                    </div>
                </div>

                <input className='searchWrapper' type='text' placeholder='Search By Name...'
                    value={searchQuery}
                    onChange={filterData}
                />

                <select className='searchWrapper optionGrp' value={sortData}
                    onChange={handleSearch}>
                    <option value='name'>Sort By Name</option>
                    <option value='age'>Sort By Age</option>
                    <option value='number'>Sort By Number</option>
                </select>

                {sortedCards.map((card, index) =>
                    <div id='formWrapper' className='form2' key={index}>
                        <div className='formStyle'>
                            <button style={{
                                border: 'none',
                                background: 'none',
                                transform: 'translate(70px, -10px)'
                            }} onClick={() => handleDelete(card.id)}>❌</button>

                            {editable === card.id ? <button className='editBtn' onClick={handleEditClick}>✅</button>
                                :
                                <button className='editBtn' onClick={() => handleEditClick(card.id)}>🖊</button>
                            }

                            <label htmlFor='name'>Name: </label>
                            {editable === card.id ? <input id="name" type='text' onChange={e => handleEditChanges(e, card.id)} value={card.name} /> : <span>{card.name}</span>}
                        </div>
                        <div className='formStyle'>
                            <label htmlFor='email'>Email: </label>
                            {editable === card.id ? <input id="email" type='email' onChange={e => handleEditChanges(e, card.id)} value={card.email} /> : <span>{card.email}</span>}
                        </div>
                        <div className='formStyle'>
                            <label htmlFor='password'>Password: </label>
                            {editable === card.id ? <input id="password" type='password' onChange={e => handleEditChanges(e, card.id)} value={card.password} /> : <span>{card.password}</span>}
                        </div>
                        <div className='formStyle'>
                            <label htmlFor='phone'>Phone: </label>
                            {editable === card.id ? <input id="phone" type='tel' onChange={e => handleEditChanges(e, card.id)} value={card.phone} /> : <span>{card.phone}</span>}
                        </div>
                        <div className='formStyle'>
                            <label htmlFor='age'>Age: </label>
                            {editable === card.id ? <input id="age" type='number' onChange={e => handleEditChanges(e, card.id)} value={card.age} /> : <span>{card.age}</span>}
                        </div>
                    </div>
                )}
            </div>
        </form>
    )
}

export default UserDetailForm;
