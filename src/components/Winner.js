import React from 'react'
import Style from './winner.module.css';
import Win from '../assets/images/img1.gif';
import Loss from '../assets/images/img2.gif';
export default function Winner({winnerName, symbol}) {
    const handlerRefresh = () => {
        window.location.reload();
    }
    if(symbol.toUpperCase() === winnerName.toUpperCase()){
        return (
            <div className={Style.root} >
               <span className={Style.text} > Congratulations You Win The Match</span>
                <br />
                <img className="m-3" src={Win} width={200} />
                <br />
                <button className="btn btn-warning" onClick={handlerRefresh} >Play Again</button>
            </div>
        )
    }else{
        return (
            <div className={Style.rootFail} >
                <span className={Style.text} > Better Luck Next Time </span>
                <br />
                <img className="m-3" src={Loss} width={200} />
                <br />
                <button className="btn btn-warning" onClick={handlerRefresh} >Play Again</button>
            </div>
        )
    }
}
