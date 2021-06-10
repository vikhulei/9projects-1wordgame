import React from "react"

const Results = ({counter, correctResults, wrongResults}) => {
    return <div className="resultsContainer">
        <div className="countCorrect">
            Correct answers: {counter}
        </div>
        <div className="wordsContainer">
            <div className="correctWords">
                <div className="correctWord">
                    {correctResults}
                </div>
            </div>
            <div className="wrongWords">
                <div className="wrongWord">
                    {wrongResults[0]}
                </div>
            </div>
        </div>
    </div>
}

export default Results