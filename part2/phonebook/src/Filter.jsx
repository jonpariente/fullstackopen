const Filter = ({ nameFilter, onNameFilterChange }) => {
  return <div>Filter shown with: <input value={nameFilter} onChange={onNameFilterChange} /></div>
}

export default Filter