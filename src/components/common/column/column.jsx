import React from 'react'
import PropTypes from 'prop-types'
import styles from './column.scss'

const Column = ({ children, sm, md, lg, xl, column }) => {
  const cols = [
    `col-${column}`,
    `col-sm-${sm}`,
    `col-md-${md}`,
    `col-lg-${lg}`,
    `col-xl-${xl}`
  ]
  let classNames = styles.col
  cols.map(a => {
    if (styles[a]) classNames = `${classNames} ${styles[a]}`
    return false
  })
  return <div className={classNames}>{children}</div>
}

Column.propTypes = {
  children: PropTypes.object.isRequired,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  xl: PropTypes.string,
  column: PropTypes.string
}

Column.defaultProps = { sm: '', md: '', lg: '', xl: '', column: '' }

export default Column
