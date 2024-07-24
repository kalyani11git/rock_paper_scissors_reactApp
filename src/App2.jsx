import React from "react";
import { useState } from "react";
import './App.css'
import paper from './assets/paper.png';
import rock from './assets/rock.png';
import scissors from './assets/scissors.png';

const images = [
    { id: 0, src: paper },
    { id: 1, src: rock },
    { id: 2, src: scissors }
  ];


function App2() {

    const [score , setScore] = useState(0);
    const [card, setCard] = useState("");
    const [randomCard , setRandomCard] = useState("");
    const [compScore,setCompScore] = useState(0);
    const [winText,setWinText] = useState("");

    const cardArray = ["rock","paper","scissors"];

    function game(curr) {
        
        const random =  Math.floor(Math.random() * 3);
        
        const userChoice = cardArray[curr];
        const compChoice = cardArray[random];

         setCard(userChoice);
         setRandomCard(compChoice);

        if(curr===random){
         
         setScore(score);
         setCompScore(compScore);
         
        }
        else if (
            (userChoice === "rock" && compChoice === "scissors") ||
            (userChoice === "paper" && compChoice === "rock") ||
            (userChoice === "scissors" && compChoice === "paper")
          ) {
        
           setScore(score+1);
           setWinText(`You win !! your ${userChoice} beats computers ${compChoice}`);
         

          }   
          else{
            setCompScore(compScore+1);
            setWinText(`You lose !! your ${userChoice} lose by computers ${compChoice}`);
          }
    }

    const reset =()=>{
        setCard('')
        setRandomCard('')
        setScore(0);
        setCompScore(0);
    }



    return(
        <>

        <div className="h-screen w-screen flex flex-wrap justify-center items-center flex-col bg-slate-500">
            <div className="h-auto w-auto flex flex-wrap justify-center items-center gap-5 my-5">
                {images.map((image) => (
                    <img className="h-40 w-40 rounded-full object-cover" key={image.id} src={image.src}   onClick={() => game(image.id)} />
                ))}

            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-5 my-5 flex-col">
             <div className="flex flex-wrap justify-center items-center gap-5 my-5 flex-row">
            <h3 className="bg-green-700 py-1 px-3 rounded-lg text-white">Your Score : {score} </h3>
            <h3 className="bg-red-700  py-1 px-3 rounded-lg text-white">Computer Score : {compScore} </h3>
            </div>
            {
            card==randomCard ? (
                card === '' ? 
            

                <>
                <h3 className="bg-slate-700 text-white py-1 px-3 rounded-sm text-xl">Play Game</h3>
                </>
               : 
                <>
                
                <h3 className="bg-slate-700 text-white py-1 px-3 rounded-sm text-xl">game draw</h3>
                </>
            ):(
                <>
                <h3 className="bg-slate-700 text-white py-1 px-3 rounded-sm text-xl">{winText}</h3>
                </>
            )}
            
            </div>
            <div>
                <button  className="bg-blue-700 rounded-md py-1 px-2" type="button" onClick={reset}>Reset</button>
            </div>
        </div>
        </>
    )
    
}

export default App2;