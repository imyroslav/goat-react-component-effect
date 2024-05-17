import { useEffect } from "react";


export default function Timer() {

    useEffect(() => {
        console.log("setInterval");
        const idTimer = setInterval(() => {
            console.log(Date.now());
        }, 1000);

        return () => {
            console.log("cleanup")
            clearInterval(idTimer);
        };

    }, [])


    return <div>Timer</div>;
}