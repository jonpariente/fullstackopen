import { useState } from 'react'
import Button from './Button'
import Statistics from './Statistics'

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

    return (
        <>
            <h2>Give feedback</h2>
            <Button text="Good" onClick={handleGoodClick} />
            <Button text="Neutral" onClick={handleNeutralClick} />
            <Button text="Bad" onClick={handleBadClick} />
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
            />
        </>
    )
}

export default App