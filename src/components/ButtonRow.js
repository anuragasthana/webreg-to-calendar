import ActionButton from "./ActionButton";

const ButtonRow = ({ subjects, onAdd }) => {
  return (
    <div className="button-row">
        <ActionButton name="add-subject" text="Add Subject" subjects={subjects} onClick={onAdd} />
        <ActionButton name="save" text="Save" subjects={subjects}/>
        <ActionButton name="submit" text="Submit" subjects={subjects} disabled={subjects.length < 1}/> 
    </div>
  )
}

export default ButtonRow