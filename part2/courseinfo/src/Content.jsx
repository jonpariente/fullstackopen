import Part from './Part'

const Content = ({ course }) => {
  const { parts } = course

  return (
    <>
      {parts.map((part) =>
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )}
    </>
  )
}

export default Content