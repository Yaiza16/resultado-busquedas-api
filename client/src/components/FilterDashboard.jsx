function FilterDashboard() {
  return (
    <div className="filter-dashboard-container">
      <select className="filter-item filter-item--type">
        <option>Productos (53)</option>
        <option>Fresa</option>
        <option>Plátano</option>
      </select>
      <select className="filter-item filter-item--sort">
        <option>Ordenar por</option>
        <option>Precio</option>
        <option>Relevancia</option>
      </select>
    </div>
  )
}

export default FilterDashboard
