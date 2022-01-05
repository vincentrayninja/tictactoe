import React from 'react'
import Style from './winner.module.css';
export default function Winner({winnerName}) {
    const handlerRefresh = () => {
        window.location.reload();
    }
    return (
        <div className={Style.root} >
           <span className={Style.text} > Winner is { winnerName} </span>
            <br />
            <img className="m-3" src='https://cliply.co/wp-content/uploads/2021/09/CLIPLY_372109170_FREE_FIREWORKS_400.gif' width={200} />
            <br />
            <button className="btn btn-warning" onClick={handlerRefresh} >Play Again</button>
        </div>
    )
}
