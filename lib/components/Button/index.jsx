import styles from './styles.module.css'

const Button = (props) => {
  const { className, ...restProps } = props
  return <button className={`${styles.button} ${className ?? ''}`} {...restProps}>{props.label}</button>
}

export default Button
