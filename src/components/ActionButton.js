const ActionButton = ({name, text, disabled}) => {
    return (
        <button className={name} disabled={disabled}>
          <p>{text}</p>
        </button>
    )
}
  
ActionButton.defaultProps = {
  disabled: false
}

export default ActionButton