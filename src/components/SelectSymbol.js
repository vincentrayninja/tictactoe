import React from 'react'

export default function SelectSymbol({ symbol, setSymbol }) {
    const handleSymbolSelection = (symbol) => {
        setSymbol(symbol)
    }
    return (
        <div className="text-center pt-2" >
            <h5>Select Symbol.</h5>
            <div className="d-flex justify-content-center p-3"  >
                <div className="col-sm-1" > 
                    <button className={ symbol === 'X' ? "btn btn-success" : "btn btn-warning" } onClick={() => handleSymbolSelection('X')} >X</button>
                </div>
                <div className="col-sm-1" >
                    <button className={ symbol === 'O' ? "btn btn-success" : "btn btn-warning" } onClick={() => handleSymbolSelection('O')} >O</button>
                </div>
            </div>
        </div>
    )
}
