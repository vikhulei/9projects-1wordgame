import React from "react"

const Results = ({counter, correctResults, wrongResults}) => {
    return <div className="resultsContainer">
        <div className="countCorrect">
            Correct answers: {counter}
        </div>
        <div className="wordsContainer">
            <div className="correctWords">
                {correctResults.map((correctWord, index) => (
                    <div key={index} className="correctWord">
                    {correctWord}
                </div>
                ) )}
                
            </div>
            <div className="wrongWords">
                {wrongResults.map((wrongWord, index) => (
                    <div key={index} className="wrongWord">
                        {wrongWord}
                    </div>
                    ))
                }
            </div>
        </div>
    </div>
}

export default Results