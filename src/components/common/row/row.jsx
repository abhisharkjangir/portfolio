import React from 'react'
import PropTypes from 'prop-types'
import styles from './row.scss'

const Row = ({ children }) => {
  return <div className={styles.row}>{children}</div>
}

Row.propTypes = {
  children: PropTypes.object.isRequired
}

export default Row
