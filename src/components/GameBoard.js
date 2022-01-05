import React, { useEffect, useState } from "react";
import Square from "./Square";
import { win3, win4, win5 } from "../utils/winSet";
export default function GameBoard({ row, clickHandlerOnGrid, turn, counter, setWinner, setIsTie }) {
  const [rows, setRows] = useState(Array(row).fill(null));
  const [cols, setCols] = useState(Array(row).fill(null));
  const [positions, setPositions] = useState(Array(row * row).fill(null));
  const rowCount = row,
    colCount = row;
  let winners = [];
  useEffect(() => {
    let arr = [...positions];
    let indexes = Array.from(Array(positions.length).keys());
    let availableIndexes = indexes.filter((index) => arr[index] == null);
    let wincheck = calculateWinner(positions);
    console.log(wincheck, availableIndexes);
    if(!wincheck && availableIndexes.length == 0 ){
      setIsTie(true);
    }
  }, [positions]);
  const [initiateAutoPilot, setInitateAutoPilot] = useState(false);
  let i = 0;

  const handlerPositionVal = (index, turn) => {
    let newArr = [...positions];
    newArr[index] = turn;
    setPositions(newArr);
    clickHandlerOnGrid(index);
    setInitateAutoPilot(counter % 2 == 0);
    calculateWinner(index);
    let wincheck = calculateWinner(positions);
    if(wincheck){
        setWinner(wincheck)
    }
    // console.log('winner is',wincheck);
  };

  useEffect(() => {
    if (initiateAutoPilot) {
      // console.log(initiateAutoPilot)
      var arr = [...positions];

      var indexes = Array.from(Array(positions.length).keys());
      var availableIndexes = indexes.filter((index) => arr[index] == null);
      var selectedIndex =
        availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
      arr[selectedIndex] = turn;
      setTimeout(function(){
        setPositions(arr);
        clickHandlerOnGrid(selectedIndex);
        setInitateAutoPilot(counter % 2 == 0);
          let wincheck = calculateWinner(positions);
          if(wincheck){
              setWinner(wincheck)
          }
      }, 500);
    }else{
      let wincheck = calculateWinner(positions);
        if(wincheck){
            setWinner(wincheck)
        }
    }
  }, [initiateAutoPilot]);

  function setWinnerCombination() {
    var valueInRow = 0;
    var valueInColumn = 0;
    var valueInDiagonal = 0;
    winners = [];
    const boardSize = row;
    for (let j = 0; j < boardSize; j++) {
      //for pushing rows into winners array
      var rowIndex = [];
      //i = rowNum
      for (let i = 0; i < boardSize; i++) {
        rowIndex.push(valueInRow);
        valueInRow++;
      }
      console.log(rowIndex);
      winners.push(rowIndex);
      //for pushing columns into winners array
      var columnIndex = [];
      var tempValueInColumn = valueInColumn;
      //i = colNum
      for (let i = 0; i < boardSize; i++) {
        columnIndex.push(tempValueInColumn);
        tempValueInColumn += boardSize;
      }
      winners.push(columnIndex);
      valueInColumn++;
    }
    var diagonalIndexOne = [];
    // l = Digonal Num
    for (let l = 0; l < boardSize; l++) {
      diagonalIndexOne.push(valueInDiagonal);
      valueInDiagonal += boardSize + 1;
    }
    winners.push(diagonalIndexOne);

    valueInDiagonal = boardSize - 1;
    var diagonalIndexTwo = [];
    // l = Digonal Num
    for (let l = 0; l < boardSize; l++) {
      diagonalIndexTwo.push(valueInDiagonal);
      valueInDiagonal += boardSize - 1;
    }
    winners.push(diagonalIndexTwo);
  }

  function calculateWinner(squares) {
    setWinnerCombination();
    for (let i = 0; i < winners.length; i++) {
      const [a, b, c, d, e] = winners[i];
      if(rowCount === 3){
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c] 
          ) {
            return squares[a];
          }
      }else if(rowCount===4){
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c] &&
            squares[a] === squares[d]
          ) {
            return squares[a];
          }
      }else{
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c] &&
            squares[a] === squares[d] &&
            squares[a] === squares[e]
          ) {
            return squares[a];
          }
      }
      
    }
    return null;
  }

  return (
    <div className="d-flex justify-content-center">
      <div align="center" className="">
        {rows.map((val, index) => (
          <div className="d-flex" key={index}>
            {cols.map((val2, index2) => {
              i++;
              return (
                <Square
                  index={i - 1}
                  key={index2}
                  clickHandlerOnGrid={clickHandlerOnGrid}
                  counter={counter}
                  turn={turn}
                  positionsVal={positions[i - 1]}
                  handlerPositionVal={handlerPositionVal}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
