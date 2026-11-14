import { useState } from 'react'
import Button from './Button'

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
    }

    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = (good / all) * 100

    return (
        <>
            <h2>Give feedback</h2>
            <Button text="Good" onClick={handleGoodClick} />
            <Button text="Neutral" onClick={handleNeutralClick} />
            <Button text="Bad" onClick={handleBadClick} />
            <h2>Statistics</h2>
            <div>Good: {good}</div>
            <div>Neutral: {neutral}</div>
            <div>Bad: {bad}</div>
            <div>All: {all}</div>
            <div>Average: {all > 0 ? average : 0}</div>
            <div>Positive: {all > 0 ? positive : 0}%</div>
        </>
    )
}

export default App