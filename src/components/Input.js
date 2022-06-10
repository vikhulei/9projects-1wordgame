import React from "react"

const Input = (props) => {
    const {time, handleStart, newWord, handleInput, inputDisabled, inputEl,
    start, inputValue, setInputValue} = props;
    
    return <div className="inputSection">
        <div className="inputContainer">
        <div className="newWord">
            {newWord}
        </div>
        <div className="timer">
            {time}
        </div>
        <div className="input">
            <input ref={inputEl} type="text" onKeyPress={handleInput}
            disabled={inputDisabled}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
    
            ></input>
            <button onClick={handleStart}>{start}</button>
        </div>

    </div>
    </div>
    
}

export default Input