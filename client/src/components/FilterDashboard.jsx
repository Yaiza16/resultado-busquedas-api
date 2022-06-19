import PropTypes from 'prop-types'

function FilterDashboard({ numberOfProducts }) {
  return (
    <div className="filter-dashboard-container">
      <select className="filter-item filter-item--type">
        <option>{`Productos (${numberOfProducts})`}</option>
        <option>Strawberry</option>
        <option>Banana</option>
      </select>
      <select className="filter-item filter-item--sort">
        <option>Ordenar por</option>
        <option>Precio</option>
        <option>Relevancia</option>
      </select>
    </div>
  )
}

FilterDashboard.propTypes = {
  numberOfProducts: PropTypes.number.isRequired,
}
export default FilterDashboard
