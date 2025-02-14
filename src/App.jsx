import { useState } from "react"
import Die from "./Die"
import { nanoid } from "nanoid"

export default function App() {
    
  const [dice, setDice] = useState(generateAllNewDice())

  function generateAllNewDice() {
      return new Array(10)
          .fill(0)
          .map(() => ({
              value: Math.ceil(Math.random() * 6),
              isHeld: false,
              id: nanoid()
          }))
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die => 
        die.isHeld ?
            die :
            { ...die, value: Math.ceil(Math.random() * 6) }
    ))
}

  function hold(id) {
    // console.log(id)
    setDice(prevDice => prevDice.map( (die) => {
      return die.id == id ? { ...die, isHeld: !die.isHeld } : { ...die }
    }))
}

const diceElements = dice.map(dieObj => (
    <Die
        key={dieObj.id}
        value={dieObj.value}
        isHeld={dieObj.isHeld}
        hold={hold}
        id={dieObj.id}
    />
))

  return (
      <main>
          <div className="dice-container">
              {diceElements}
          </div>
          <button className="roll-dice" onClick={rollDice}>Roll</button>
      </main>
  )
}