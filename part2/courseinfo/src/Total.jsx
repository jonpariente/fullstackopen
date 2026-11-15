const Total = ({ course }) => {
  const { parts } = course
  const total = parts.reduce((total, part) => total + part.exercises, 0)
  
  return <strong>Total of {total} exercises </strong>
}

export default Total