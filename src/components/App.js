import { useEffect, useState } from "react";
import WindowTracker from "./WindowTracker";
function App() {
    const [show, setShow] = useState(true);

    function clickHandler() {
        setShow((prev) => !prev);
    }

/*     method 1
    const[count,setCount] = useState(1)

    window.onresize = () => {
        setCount(prev => prev + 1)
    }

    useEffect(()=> {
    },[count])
 */

    return (
        <div className="container">
            <div className="content">
                <button
                    className="btn btn-warning mt-5 mb-2 p-3"
                    onClick={clickHandler}
                >
                    toggle WindowTracker
                </button>

                {show &&   <WindowTracker />}
            </div>
        </div>
    );
}

export default App;
