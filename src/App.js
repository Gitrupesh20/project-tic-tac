
import "./App.css";

import { useState } from "react";


const Square = ({value, onSquareClick}) =>{
  
 
    return(
        <>

        <button className="Square"  onClick={onSquareClick}>{value}</button>

        </>
    ) ;

    }



const Board = () => {
   
  const [flag,setFlag]=useState(true)
  const [square,setSquare]=useState(Array(9).fill(null));
  
 
  
  const clickHandler  =(i)=>{

    
    if (square[i] ||calWinner(square)) {
    
      return;
    }


    const nextSquare = square.slice();

     if(flag){
        nextSquare[i] ='X' ;
       setFlag(false);
     }else{
      nextSquare[i] ='O' ;
      setFlag(true);
     }
      
      
      setSquare(nextSquare);

  }
  let winner = calWinner(square)

   let status = winner != null ? "Winner:" + winner  : "winner: ";



    return(
        <>

            <h1 >{status}</h1>

            <div>
                <Square value={square[0]}  onSquareClick ={() =>clickHandler(0)} />
                <Square value={square[1]}  onSquareClick ={() =>clickHandler(1)}  />
                <Square value={square[2]}  onSquareClick ={() =>clickHandler(2)}  />
                
            </div>

            <div>
                <Square value={square[3]}  onSquareClick ={() =>clickHandler(3)} />
                <Square value={square[4]}  onSquareClick ={() =>clickHandler(4)} />
                <Square value={square[5]}  onSquareClick ={() =>clickHandler(5)} />
            </div>

            <div >
                <Square value={square[6]} onSquareClick ={() =>clickHandler(6)} />
                <Square value={square[7]} onSquareClick ={() =>clickHandler(7)} />
                <Square value={square[8]} onSquareClick ={() =>clickHandler(8)} />
             </div>

           <button className="reset" onClick={()=>setSquare(square.slice().fill(null))}>Reset</button>
        
             
        </>

    )
}

const calWinner = (square)=>{

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
           <Board/>
        </div>
    )
}

export default App;
