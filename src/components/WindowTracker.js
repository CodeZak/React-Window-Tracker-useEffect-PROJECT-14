import { useEffect, useState } from "react";

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", function () {
            setWindowWidth(window.innerWidth);
        });
    }, []);
    return (
        <div className="text">
            window width : <span>{windowWidth}</span>
        </div>
    );
}
