import React, { useState } from 'react';
import './Accordion.css';

const faqs = [
    {
        id: 0,
        title: "Where are these chairs assembled?",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
        open: false,
    },
    {
        id: 1,
        title: "How long do I have to return my chair?",
        text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
        open: false,
    },
    {
        id: 2,
        title: "Do you ship to countries outside the EU?",
        text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
        open: false,
    },
];


export default function Accordion() {

    return (
        <div><AccordionItem data={faqs} /></div>
    )
}

function AccordionItem({ data }) {
    const [curOpen, setCurOpen] = useState(null);
    console.log(curOpen, 'curOpen');



    function handleToggle(index) {
        console.log('index: ', index);
        setCurOpen(curOpen === index ? null : index);
    }


    return (
        <div>
            {data.map((item, i) =>
            (
                <div className="accordionWrapper"
                    onClick={() => handleToggle(i)}
                    key={i}>
                    <div className='accBodyWrapper'>
                        {/* <div>{i < 5 ? `0${i + 1}` : i + 1}</div> */}
                        <div className='numStyle'>{`0${i + 1}`}</div>
                        <div>{item?.title}</div>
                        <div>{curOpen === i ? "➖" : "➕"}</div>
                    </div>
                    {curOpen === i && <p>{item?.text}</p>}
                </div>
            ))}
        </div>
    )
}