const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = (good / all) * 100
    
    return (
        <>
            <h2>Statistics</h2>
            {all > 0 ? (
                <>
                    <div>Good: {good}</div>
                    <div>Neutral: {neutral}</div>
                    <div>Bad: {bad}</div>
                    <div>All: {all}</div>
                    <div>Average: {average}</div>
                    <div>Positive: {positive}%</div>
                </>
            ) : (
                <div>No feedback given</div>
            )}
        </>
    )
}

export default Statistics