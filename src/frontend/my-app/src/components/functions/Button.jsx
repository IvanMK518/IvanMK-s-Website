import propTypes from 'prop-types'
import styles from '../styles/button.module.css'


const Button = ({text, onClick}) => {

    

  return <button onClick={onClick} className={styles.btn}>{text}</button>
}

Button.defaultProps = {
   
}

Button.propTypes = {
    text: propTypes.string,   
}

export default Button