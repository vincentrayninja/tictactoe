import React,{useState, useEffect} from 'react'
import Style from './square.module.css';

export default function Square({index, handlerPositionVal,positionsVal, turn}) {
    const handleClick = (e, index) => {
        handlerPositionVal(index, turn);
    }
    return (
        <button className={Style.root} onClick={(e) => handleClick(e, index)} disabled={ positionsVal } style={ positionsVal === 'X'? { color: 'black' } : { color: "#fffcc9" } } >{ positionsVal }
        </button>
    )
}
