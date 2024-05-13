import propTypes from 'prop-types'


const Button = ({text, onClick}) => {

    

  return <button onClick={onClick} className={styles.btn}>{text}</button>
}

Button.defaultProps = {
   
}

Button.propTypes = {
    text: propTypes.string,   
}

export default Button