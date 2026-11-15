const Total = ({ course }) => {
  const { parts } = course
  let total = 0

  parts.forEach(part => {
    total += part.exercises
  });
  
  return (
    <strong>Total of {total} exercises </strong>
  )
}

export default Total