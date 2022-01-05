import React from 'react';

export default function MazeSelect({setMaze, maze}) {
    const handleMazeSelection = (value) => {
        setMaze(value);
    }
    return (
        <div className="text-center pt-5" >
            <h5>Select Maze Size.</h5>
            <div className="d-flex justify-content-center p-3"  >
                <div className="col-sm-1 m-1" > 
                    <button className={ maze === 3 ? "btn btn-success" : "btn btn-warning" } onClick={() => handleMazeSelection(3)} >(3X3)</button>
                </div>
                <div className="col-sm-1 m-1" >
                    <button className={ maze === 4 ? "btn btn-success" : "btn btn-warning" } onClick={() => handleMazeSelection(4)} >(4X4)</button>
                </div>
                <div className="col-sm-1 m-1" >
                    <button className={ maze === 5 ? "btn btn-success" : "btn btn-warning" } onClick={() => handleMazeSelection(5)} >(5X5)</button>
                </div>
            </div>
        </div>
    )
}
