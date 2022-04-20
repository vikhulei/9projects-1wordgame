import React, { useState, useEffect, useRef } from "react"
import './App.css';
import Input from "./components/Input"
import Results from "./components/Results"
import Words from "./components/Words"


function App() {
  const [time, setTime] = useState(30)
  const [disabled, setDisabled] = useState("disabled")
  const [word, setWord] = useState(Words)
  const [newWord, setNewWord] = useState(word[0])
  const [inputDisabled, setInputDisabled] = useState(true)
  const [start, setStart] = useState("Start")
  const [inputValue, setInputValue] = useState()
  const [counter, setCounter] = useState(0)

  const [correctResults, setCorrectResults] = useState([])
  const [wrongResults, setWrongResults] = useState([])



  const inputEl = useRef()

  let n = Math.floor(Math.random()*word.length)

  const handleStart = () => {
    if (start==="Start") {
      setDisabled("enabled")
      setInputDisabled(false)
      setStart("Restart")
      inputEl.current.focus()
    } else if (start==="Restart") {
      setInputValue("")
      setInputDisabled(true)
      setStart("Start")
      setCounter(0)
      setCorrectResults([])
      setWrongResults([])
      setDisabled("disabled")
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
    if(disabled !== "disabled" && time > 0) {
        setTimeout(() => {setTime(prevtime => prevtime - 1)}, 1000)
        inputEl.current.focus()
        } else if (disabled==="disabled") {
          setTime(30)
        } else if (time === 0) {
          setDisabled("disabled")
          setInputDisabled(true)
    }
  }, [disabled, time])

  return (
    <div className="App">
      <Input 
      newWord={newWord}
      time={time}
      handleStart={handleStart}
      handleInput={handleInput}
      inputDisabled={inputDisabled}
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
