import Subject from "./Subject";

const Subjects = ({ subjects, onDelete }) => {
  return (
      <>
      {subjects.map((subject) => (
        <Subject key={subject.id} subject={subject}
        onDelete={onDelete} />
      ))}
      </>
  )
}

export default Subjects