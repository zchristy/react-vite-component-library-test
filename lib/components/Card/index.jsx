import React from 'react'
import styles from './styles.module.css'

const Card = (props) => {
  const { className, ...restProps } = props
  return <div className={`${styles.card} ${className ?? ''}`} {...restProps}>{props.children}</div>
}

export default Card
