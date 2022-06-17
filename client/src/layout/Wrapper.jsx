import PropTypes from 'prop-types'

function Wrapper({ children }) {
  return <div className="wrapper-page">{children}</div>
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
