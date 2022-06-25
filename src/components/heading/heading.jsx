import React from 'react'
import styles from './heading.scss'
// eslint-disable-next-line react/prop-types
const Heading = ({ text, center }) => {
  return (
    <h3 className={center ? styles.headingCenter : styles.heading}>{text}</h3>
  )
}
export default Heading
