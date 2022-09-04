import ActionButton from "./ActionButton";

const ButtonRow = () => {
  return (
    <div className="button-row">
        <ActionButton name="add-subject" text="Add Subject" />
        <ActionButton name="save" text="Save" />
        <ActionButton name="submit" text="Submit" />
    </div>
  )
}

export default ButtonRow