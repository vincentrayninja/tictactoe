import React from 'react'
import Style from './tie.module.css';

export default function Tie() {
    const handlerRefresh = () => {
        window.location.reload();
    }
    return (
        <div className={Style.root} >
           <span className={Style.text} > The match is draw </span>
            <br />
            <img src="https://thumbs.gfycat.com/EllipticalJampackedBarb-max-1mb.gif" width={110}  />
            <br />
            <button className="btn btn-warning" onClick={handlerRefresh} >Rematch</button>
        </div>
    )
}
