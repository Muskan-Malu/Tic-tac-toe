import React from "react";
import './square.css'

const Square = ({value, styleName, onClick}) => {
    return (
        <div className={`${styleName}`} onClick={onClick}>
            {value}
        </div>
    )
}

export default Square;