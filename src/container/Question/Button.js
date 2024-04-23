import { useState } from "react";

export default function Button({ upvotes, bgColor, onClick }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div>
            <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{ background: bgColor }}
                onClick={onClick}
            >{hovered ? "Upvote" : `👍 ${upvotes}`}</button>
        </div>
    )
}