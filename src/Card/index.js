import _ from 'lodash'
import classNames from 'classnames'
import isEmpty from 'lodash.isempty'
import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

const Card = (props) => {
  const { children, className } = props

  if (isEmpty(children)) return null
  const classes = classNames(styles.card, className)

  return React.createElement('div', { ...props, className: classes}, children)
}

Card.propTypes = propTypes

export default Card
