import React from 'react';

const Digit = ({unit}) => {
    return (
            <div className="rounded border border-secondary p-2 " style={{width: "9rem", height: "16rem", fontSize: "160px", background:"black", color: "white", textAlign: "center"}}>
                        <div className="counter">{unit}</div>
            </div>
    )
}

export default Digit;