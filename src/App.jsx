import Die from "./Die";
import RollBtn from "./RollBtn"
import { useState } from 'react';


function App() {
  const [randNums, setRandNums] = useState(generateAllNewDice) //can only be used inside React Components!!!

  function generateAllNewDice(){
    let randomNumbersArray = []
    for (let i=0; i<10; i++ ) {
      randomNumbersArray.push(Math.floor(Math.random()*6)+1)
    }
    //console.log(randomNumbersArray)
    return randomNumbersArray
  }

  function handleRoll(){
    console.log("Button clicked!")
    setRandNums(prevNums => generateAllNewDice())
    console.log(randNums)
   } 

  const buttonList = randNums.map( (num, index) => <Die key={index} number={num}/> )

return(
  <main>
    <div className='die-grid'>
      {buttonList}
    </div>
    <RollBtn onClick={handleRoll} />
  </main>
)

}

export default App
