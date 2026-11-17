const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => (
  props.parts.map((part) => <Part key={part.id} part={part} />)
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => <strong>Total of {props.total} exercises</strong>

const Course = ({ course }) => {
  const total = course.parts.reduce((total, part) => total + part.exercises, 0)
  
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  )
}

export default Course