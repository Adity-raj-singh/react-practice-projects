import React, { useEffect, useState } from 'react';
import './SplitBill.css';

const initialFriends = [
    {
        id: 118836,
        name: "Selena",
        image: "https://assets.vogue.com/photos/63dbbdf938fe3064fcd96b63/master/w_2560%2Cc_limit/1455615052",
        balance: -7,
    },
    {
        id: 933372,
        name: "AP Dhillon",
        image: "https://c.ndtvimg.com/2023-08/u1iu6npg_ap-dhillon_625x300_23_August_23.jpg",
        balance: 20,
    },
    {
        id: 499476,
        name: "Sidhu",
        image: "https://i.pinimg.com/736x/e1/ca/67/e1ca67bc5d1f946ed5afdb849c7c8d40.jpg",
        balance: 0,
    },
]

export default function SplitBill() {
    const [friends, setFriends] = useState(initialFriends);
    console.log('friends', friends)


    const [showAddFriend, setShowAddFriend] = useState(false);

    function handleShowAddFriend() {
        setShowAddFriend(show => !show);
    }

    function handleAddFriend(friend) {
        setFriends((friends) => [...friends, friend]);
        setShowAddFriend(false);
    }

    return (
        <div className='pageWrapper'>
            <div className='wrapper'><FriendList friends={friends} /></div>
            <div className='selectBtn1'>
                <button onClick={handleShowAddFriend} style={{
                    padding: '10px',
                    backgroundColor: 'orange',
                    borderRadius: '10px',
                    border: 'none',
                    width: '160%',
                    transform: 'translate(-200px, -10px)'
                }}>{showAddFriend ? 'Close' : 'Add Friend'}</button>
            </div>
            {showAddFriend && <FriendForm handleAddFriend={handleAddFriend} />}
            <SplitBillForm />
        </div>
    )
}

function FriendList({ friends }) {
    return (
        <div className='friendWrapper'>
            {friends && friends.map((friend) => <Friends friend={friend} key={friend.id} />)}
        </div>
    )
}

function Friends({ friend }) {
    return (
        <div className='friendListWrapper'>
            <img className="imageStyle" src={friend.image} alt={friend.name} />
            <li>
                {friend.name}
                {friend.balance < 0 && <p style={{ color: 'red' }}>You owe {friend.name} ${Math.abs(friend.balance)}</p>}
                {friend.balance > 0 && <p style={{ color: 'green' }}>{friend.name} owe you ${Math.abs(friend.balance)}</p>}
                {friend.balance === 0 && <p>You owe {friend.name} are even</p>}
            </li>
            <button className='selectBtn'>Select</button>
        </div>
    )
}

function FriendForm({ handleAddFriend }) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !image) return;

        const id = crypto.randomUUID();

        const newFriend = {
            id,
            name,
            image,
            balance: 0,
        };

        handleAddFriend(newFriend, 'newFriend');

        setName('');
        setImage('');
    }

    return (
        <form className='formWrapper' onSubmit={handleSubmit}>
            <div>
                <label>🤼 Friend Name</label>
                <input type='text' style={{ marginLeft: '15px' }} value={name}
                    onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
                <label>🌆 Image URL</label>
                <input type='text'
                    style={{ marginLeft: '30px', marginTop: '10px' }}
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </div>

            <button style={{
                width: '83px',
                backgroundColor: 'orange',
                color: 'black',
                padding: '10px',
                borderRadius: '10px',
                margin: '15px 0px 0px 220px',
                border: 'none'
            }}>Add</button>
        </form >
    )
}

function SplitBillForm() {
    return (
        <form className='formWrapperBill'>
            <h3>SPLIT A BILL WITH X</h3>
            <div>
                <label>💰 Bill Value</label>
                <input type='text' style={{ marginLeft: '40px' }} />
            </div>

            <div>
                <label>👧 Your Expense</label>
                <input type='text' style={{ marginLeft: '10px', marginTop: '10px' }} />
            </div>

            <div>
                <label>🤼 X's Expense</label>
                <input type='text' style={{ marginLeft: '20px', marginTop: '10px' }} disabled />
            </div>

            <div style={{ marginTop: '10px' }}>
                <label>🤑 Who is paying the bill?</label>
                <select style={{ marginLeft: '65px' }}>
                    <option>You</option>
                    <option>X</option>
                </select>
            </div>

            <button style={{
                width: '95px',
                backgroundColor: 'orange',
                color: 'black',
                padding: '10px',
                borderRadius: '10px',
                margin: '50px 0px 0px 220px',
                border: 'none'
            }}>Split Bill</button>
        </form >
    )
}
