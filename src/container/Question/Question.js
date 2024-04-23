import { useState } from "react";
import Button from "./Button";

export default function Question() {
    const [upvotes, setUpvotes] = useState(0);
    console.log('upvotes: ', upvotes);

    return (
        <div>
            <Button
                upvotes={upvotes}
                bgColor="blue"
                onClick={() => setUpvotes(upvotes + 1)} />
        </div>
    )
}