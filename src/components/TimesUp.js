import React from 'react'
import Style from './tie.module.css';
export default function TimesUp() {
    const handlerRefresh = () => {
        window.location.reload();
    }
    return (
        <div className={Style.root} >
           <span className={Style.text} > Times Up </span>
            <br />
            <img src="https://i.pinimg.com/originals/7f/40/ce/7f40cec1e8a63d6c6a6f90f979027db2.gif" width={200}  />
            <br />
            <button className="btn btn-warning" onClick={handlerRefresh} >Play Again</button>
        </div>
    )
}
