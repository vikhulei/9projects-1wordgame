import React, { useState, useEffect, useRef } from "react"
import './App.css';
import Input from "./components/Input"
import Results from "./components/Results"
import Words from "./components/Words"


function App() {
  const [time, setTime] = useState(30)
  const [disabled, setDisabled] = useState(true)
  const [word] = useState(Words)
  const [newWord, setNewWord] = useState(word[0])
  const [start, setStart] = useState("Start")
  const [inputValue, setInputValue] = useState("")
  const [counter, setCounter] = useState(0)
  const [correctResults, setCorrectResults] = useState([])
  const [wrongResults, setWrongResults] = useState([])
  const inputEl = useRef()

  let n = Math.floor(Math.random()*word.length)

  const handleStart = () => {
    if (start==="Start") {
      setDisabled(false)
      setStart("Restart")
      inputEl.current.focus()
    } else if (start==="Restart") {
      setInputValue("")
      setStart("Start")
      setCounter(0)
      setTime(30)
      setCorrectResults([])
      setWrongResults([])
      setDisabled(true)
    }
}

  const handleInput = e => {
    if(e.charCode === 13) {
      if(inputValue===newWord){
        setCorrectResults(prevResults => [...prevResults, inputValue])
        setCounter(prevCounter => prevCounter+1)
        setInputValue("")
      } else {
        setWrongResults(prevResults => [...prevResults, inputValue])
        setInputValue("")
      }
      setNewWord(word[n])
    }
  }

  useEffect(() => {
    if(!disabled && time > 0) {
        setTimeout(() => {setTime(time - 1)}, 1000)
        inputEl.current.focus()
        } else if (disabled && time !== 0) {
          setTime(30)
        } else if (time === 0) {
          setDisabled(true)
    }
  }, [disabled, time])

  return (
    <div className="App">
      <Input 
      newWord={newWord}
      time={time}
      handleStart={handleStart}
      handleInput={handleInput}
      disabled={disabled}
      inputEl={inputEl}
      start={start}
      setInputValue={setInputValue}
      inputValue={inputValue}
      />
      <Results 
      counter={counter}
      correctResults={correctResults}
      wrongResults={wrongResults}
      />
    </div>
  );
}

export default App;
