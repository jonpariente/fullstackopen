import StatisticLine from "./StatisticLine"

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = `${(good / all) * 100}%`
    
    return (
        <>
            <h2>Statistics</h2>
            {all > 0 ? (
                <>
                    <StatisticLine text="Good" value={good} />
                    <StatisticLine text="Neutral" value={neutral} />
                    <StatisticLine text="Bad" value={bad} />
                    <StatisticLine text="All" value={all} />
                    <StatisticLine text="Average" value={average} />
                    <StatisticLine text="Positive" value={positive} />
                </>
            ) : (
                <div>No feedback given</div>
            )}
        </>
    )
}

export default Statistics