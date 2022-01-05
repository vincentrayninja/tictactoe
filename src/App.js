import { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import MazeSelect from "./components/MazeSelect";
import SelectSymbol from "./components/SelectSymbol";
import Tie from "./components/Tie";
import TimesUp from "./components/TimesUp";
import Winner from "./components/Winner";

function App() {
  const [maze, setMaze] = useState(null);
  const [symbol, setSymbol] = useState(null);
  const [makeGrid, setMakeGrid] = useState(false);
  const [counter, setCounter] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [winName, setWinName] = useState('');
  const [isTie, setIsTie] = useState(false);
  const [timesUp, setTimesUp] = useState(false);
  const [initateTime, setinitateTime] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const clickHandlerOnGrid = (gridIndex) => {
    setCounter(counter + 1);
  }

  useEffect(() => {
    console.log('game is tie');
  },[isTie])

  useEffect(() => {
    if(startTimer){
      setTimeout(function () {
        if(initateTime >= 0 && startTimer){
          setinitateTime(initateTime - 1000)
        }
        if(initateTime === 0){
          setStartTimer(false);
          setTimesUp(true);
        }
      }, 1000)
    }
  },[startTimer, initateTime]);

  useEffect(() => {
    if(maze && symbol){
      console.log("create grid");
      let timer  = 1000;
      if(maze === 3){
        timer = 60*1000;
      }else if(maze === 4){
        timer = 120*1000;
      }else{  
        timer = 180*1000;
      }
      setinitateTime(timer);
      setStartTimer(true);
      setMakeGrid(true);
    } 
  }, [maze, symbol]);

  const setWinner = (winner) => {
      setWinName(winner);
      setIsWin(true);
      setStartTimer(false);
  }

  return (
    <div className="App">
        <Header />

        {
          isWin ? <Winner winnerName={winName} symbol={symbol} /> : ''
        }

        {
          isTie ? <Tie /> : ''
        }
        {
          timesUp ? <Tie /> : ''
        }

        { !maze ? <MazeSelect setMaze={setMaze} maze={maze}  /> : <p className="text-center p-2" >You have selected Maze of <span className="well" >{`(${maze} X ${maze})`}</span></p> }
        { maze && !symbol ?
          <SelectSymbol  symbol={symbol} setSymbol={setSymbol} />
          : symbol ?
            <>
              <p className="text-center p-2" >You have selected Symbol of <span className="well" >{`${symbol}`}</span></p>
            </>
          : ""
        }
        {/* <Square /> */}
        {
          startTimer ? <p className="text-center fw-bold" > Remainig time = <span className={ initateTime/1000 > 5 ? 'text-success' : 'text-danger' } >{initateTime / 1000} sec </span> </p> : ''
        }
        {
          makeGrid ? 
          <>
            <h4 className="text-center" >Turn : <span className="text-primary" >{ counter % 2 == 0 ? symbol : (symbol === 'X' ? 'O' : 'X' )}</span></h4>
            <GameBoard row={maze} clickHandlerOnGrid={clickHandlerOnGrid} turn={counter % 2 == 0 ? symbol : (symbol === 'X' ? 'O' : 'X') } counter={counter} setWinner={setWinner} setIsTie={setIsTie} />
          </>
          :''
        }
    </div>
  );
}

export default App;
