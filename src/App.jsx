import{useState,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Minus from './assets/minus.png'
import Add from './assets/add.png'
import toast,{Toaster} from 'react-hot-toast'

function App() {
  const[countA, setCountA]=useState(0);
  const[countB,setCountB]=useState(0);
  const[winner,setWinner]=useState("");
  
 const increasecount=()=>{
  if(countA==5){
  setWinner('Team A is winner 🏆🏆🏆');
  
  }
  else{
  setCountA(countA+1);
  }

}
 const decreasecount=()=>{
if(countA==5){
  setWinner(`Team A is Win with ${countA} Points`)
}
    else if(countA>0){
      setCountA(countA-1)
    }
  } 


  const increasecountB=()=>{
    if(countB==5){
      setWinner('Team B is winner 🏆🏆🏆');
    }
    else{
    setCountB(countB+1);
  }
  
}

  const decreasecountB=()=>{
  
    if(countB==5){
      setWinner(` Team B is Win with ${countB} Points`)
    }
    else if(countB>0){
    setCountB(countB-1)
  }
  }

  useEffect(() => {
    if (countA >= 5 && countB !== 0) {
      setCountB(0);
    }
    if (countB >= 5 && countA !== 0) {
      setCountA(0);
    }
  }, [countA, countB]);


  return (
  
    <>
     
    <h1 className='text-center font-bold text-2xl font-serif border-b-4 border-b-orange-500'>Assignment No 45</h1>     
    <h3 className="text-center font-bold font-serif text-xl mt-6 ">{winner} </h3>
    <div className="flex flex-col justify-center items-center  sm:flex-row">
     
      <div className="bg-white border-2   border-black  sm:h-60 sm:w-80 h-40 w-60 rounded-xl m-20 relative">
        <h3 className="text-2xl font-serif font-bold text-black text-center py-2">Team A</h3>

        <img src={Minus} alt="minus-icon" 
        className="sm:h-12 sm:w-12 h-10 w-10 absolute top-18 left-8" 
        onClick={decreasecount}
        />

        <img src={Add} alt="Add-icon" 
        className=" h-10 w-10 sm:h-12 sm:w-12 absolute top-18 right-8"
        onClick={increasecount}
        />
        
        <h3 className="font-serif font-bold text-3xl text-black text-center">{countA}</h3>
        
        
      </div>
      <div className="bg-white border-2 border-black sm:h-60 sm:w-80 h-40 w-60 rounded-xl m-20 relative">
        <h3 className="text-2xl font-serif font-bold text-black text-center py-2">Team B</h3>

        <img src={Minus} 
        alt="minus-icon" 
        className="h-10 w-10 sm:h-12 sm:w-12 absolute top-18 left-8" 
         onClick={decreasecountB}/>

        <img src={Add} alt="Add-icon" 
        className=" w-10 h-10 sm:h-12 sm:w-12 absolute top-18 right-8"
        onClick={increasecountB}/>
         <h3 className="font-serif font-bold text-2xl text-black text-center">{countB}</h3>
        
        
      </div>
      <Toaster/>
    </div>
    </>
   
  
  )
}

export default App
