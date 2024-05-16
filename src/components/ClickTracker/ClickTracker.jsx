import { useState, useEffect } from "react";

export default function ClickTracker() {
    
    const [clicks, setClicks] = useState(0);
    const [date, setDate] = useState(Date.now());

    useEffect(() => {
        console.log(clicks);
    }, [clicks]);

    return (
        <div>
            <button onClick={() => setClicks(clicks + 1)}>Clicks: {clicks}</button>
            <button onClick={() => setClicks(0)}>Reset</button>
            <button onClick={() => setDate(Date.now())}>Date: {date}</button>
        </div>
    )
}