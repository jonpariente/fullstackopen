import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setnewNumber] = useState('')

  const handleAddPerson = (event) => {
    setNewName(event.target.value)
  }

  const handleAddPhone = (event) => {
    setnewNumber(event.target.value)
  }
  
  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} already added to the phonebook`)
      return
    }

    const newPerson = { 
      name: newName,
      number: newNumber
    }
    
    setPersons(persons.concat(newPerson))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleAddPerson} /></div>
        <div>number: <input value={newNumber} onChange={handleAddPhone} /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => <div key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App