import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  
  const [nameFilter, setnameFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setnewNumber] = useState('')

  const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(nameFilter.toLowerCase()))

  const handleSearchPerson = (event) => {
    setnameFilter(event.target.value)
  }

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
      <div>Filter shown with: <input value={nameFilter} onChange={handleSearchPerson} /></div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleAddPerson} /></div>
        <div>number: <input value={newNumber} onChange={handleAddPhone} /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((person) => {
        return <div key={person.name}>{person.name} {person.number}</div>
      })}
    </div>
  )
}

export default App