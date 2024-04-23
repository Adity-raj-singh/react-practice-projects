import './PizzaMenu.css';
import focaccia from '../../images/focaccia.jpg';
import margherita from '../../images/margherita.jpg';
import spinaci from '../../images/spinaci.jpg';
import funghi from '../../images/funghi.jpg';
import salamino from '../../images/salamino.jpg';
import prosciutto from '../../images/prosciutto.jpg';

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: focaccia,
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: margherita,
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: spinaci,
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: funghi,
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: salamino,
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: prosciutto,
        soldOut: false,
    },
];

export default function PizzaMenu() {
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Order />
            <Footer />
        </div>
    )
}

function Header() {
    return (
        <header className='headerWrap'>
            <span className='dashStyle'></span>
            <h1>FAST REACT PIZZA CO</h1>
            <span className='dashStyle1'></span>
        </header>
    )
}

function Menu() {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    return (
        <main className='menuWrapper'>
            <div style={{ borderBottom: '3px solid lightgray', borderTop: '3px solid lightgray' }}>
                <h2>OUR MENU</h2>
            </div>

            <div className='paraWrapper'>
                <p>Authentic Italian cuisine. 6 creative dishes to <br />choose from. All from our stone oven, all organic, <br />all delicious.</p>
            </div>

            {numPizzas > 0 ? (
                pizzas.map((pizza) => (
                    <div className={`pizza ${pizza.soldOut ? "soldoutclass" : "bodyWrapper"} key={pizza.name}`}>
                        <div style={{ width: '30%', padding: '10px' }}>
                            <div style={{ width: '20%' }}>
                                <img src={pizza.photoName} alt={pizza.name} className={pizza.soldOut ? "soldOutImage" : "itemStyle"} />
                            </div>
                            <div className={pizza.soldOut ? "contentStyle1" : "contentStyle"}>
                                <h3>{pizza.name}</h3>
                                <p>{pizza.ingredients}</p>
                                <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
                            </div>
                        </div>
                    </div>
                ))
            )
                :
                <p>We're still working on oue menu. Please come back later:)</p>}

            {/* <div>We're happy to welcome you between 12:00 and 22:00.</div> */}
        </main>
    )
}

function Order() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log('isOpen: ', isOpen);

    return (
        <div>
            {isOpen ?
                (<div>
                    <p> We're open until {closeHour}:00. Come visit us or order online.</p>
                    <button className='btn'>Order</button>
                </div>) :
                <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>
            }
        </div>
    )
}

function Footer() {
    return (
        <div className='footer'>
        </div>
    )
}

