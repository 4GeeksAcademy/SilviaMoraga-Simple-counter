//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
import Home from "./component/Home.js";

//render your react application

let seconds = 0;
setInterval(()=> {
    console.log(seconds);
    if (seconds > 999999) {
        seconds = 0;
    }
    const six = Math.floor(seconds / 100000)
    const five = Math.floor((seconds % 100000) / 10000)
    const four = Math.floor((seconds % 10000) / 1000)
    const three = Math.floor((seconds % 1000) / 100)
    const two = Math.floor((seconds % 100) / 10)
    const one = Math.floor(seconds % 10)
    ReactDOM.createRoot(document.getElementById('app')).render(<Home seconds={seconds} one={one} two={two} three={three} four={four} five={five} six={six} />);
    seconds++;
}, 1000);




