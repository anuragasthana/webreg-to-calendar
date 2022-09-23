import Subject from "./Subject";

const Subjects = ({ subjects, onDelete }) => {
  return (
      <div className="subjects">
      {subjects.map((subject) => (
        <Subject key={subject.id} subject={subject}
        onDelete={onDelete} />
      ))}
      </div>
  )
}

export default Subjects