import classNames from 'classnames'
import isEmpty from 'lodash.isempty'
import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

const Card = ({ children, className }) => {
  if (isEmpty(children)) return null
  const classes = classNames(styles.card, className)

  return <div className={classes}>{children}</div>
}

Card.propTypes = propTypes

export default Card
