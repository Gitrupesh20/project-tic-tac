
import "./App.css";

import { useState } from "react";


const Square = ({value, onSquareClick}) =>{
  
    return(
        <>

        <button className="Square"  onClick={onSquareClick}>{value}</button>

        </>
    ) ;

}



const Board = ({isXtrun,squares, onPlay}) => {
   
  
    const clickHandler  =(i)=>{

    
        if (squares[i] ||calculateWinner(squares)) {
        
          return;
        }
    
    
        const nextsquares = squares.slice();
    
        nextsquares[i]= isXtrun ? "X" : "O";
          
          
          onPlay(nextsquares);

    
      }
  
  let winner = calculateWinner(squares)

   let status = "Winner: " + winner  ;



    return(
        <>
        <div>
           

            <h3 >{winner!=null ? status : "Next Move of " + (isXtrun ? "X" : "O") }</h3>

            <div>
                <Square value={squares[0]}  onSquareClick ={() =>clickHandler(0)} />
                <Square value={squares[1]}  onSquareClick ={() =>clickHandler(1)}  />
                <Square value={squares[2]}  onSquareClick ={() =>clickHandler(2)}  />
                
            </div>

            <div>
                <Square value={squares[3]}  onSquareClick ={() =>clickHandler(3)} />
                <Square value={squares[4]}  onSquareClick ={() =>clickHandler(4)} />
                <Square value={squares[5]}  onSquareClick ={() =>clickHandler(5)} />
            </div>

            <div >
                <Square value={squares[6]} onSquareClick ={() =>clickHandler(6)} />
                <Square value={squares[7]} onSquareClick ={() =>clickHandler(7)} />
                <Square value={squares[8]} onSquareClick ={() =>clickHandler(8)} />
             </div>

        
             </div>
        </>

    )
}




const Game =()=>{

    const [xTrun,setXtrun]=useState(true)
    const [history,setHistory]=useState([Array(9).fill(null)]);
    const curMove = history[history.length-1];

   
       console.log(history);
     const handleClick =(nextSquare)=>{

       setXtrun(xTrun ? false : true);

       setHistory([...history,nextSquare]);

     }

     const undo = () =>{
        
        if(history.length>1){
            const ele= history.slice(0,-1);
            setHistory(ele);

            setXtrun(!xTrun);

        }
        
     }
    
    return(
        <>
        <div>
             <Board isXtrun={xTrun} squares={curMove} onPlay={handleClick}  />

           
                <button className="restart" onClick={()=>setHistory([history.slice().fill(null)])}>Restart</button>

                <button className="undo" onClick={undo} >UNDO</button>
        </div>
            
        </>
        
    );

}


const calculateWinner = (square)=>{

    const winner=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8]
    ]

    for(let i=0;i<winner.length;i++){
        const [a,b,c]=winner[i]
        if(square[a]===square[b]&&square[b]===square[c]){
            return square[a];

        }
    }

    return null;


}

const App = () => {

    return (
        <div className="App">
           <Game/>
        </div>
    )
}

export default App;
