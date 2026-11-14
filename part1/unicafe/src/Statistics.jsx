const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = (good / all) * 100
    
    return (
        <>
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

export default Statistics