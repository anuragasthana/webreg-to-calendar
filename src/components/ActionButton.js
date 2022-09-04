const ActionButton = ({name, text}) => {
    return (
        <button className={name}>
          <p>{text}</p>
        </button>
    )
}
  
export default ActionButton