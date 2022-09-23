const ActionButton = ({name, text, disabled, onClick}) => {
    return (
        <button id={name} className='action-button' disabled={disabled} onClick={onClick}>
          <p>{text}</p>
        </button>
    )
}
  
ActionButton.defaultProps = {
  disabled: false
}

export default ActionButton