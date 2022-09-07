import { FaTimes } from 'react-icons/fa';

const Subject = ({ subject, onDelete }) => {
  return (
    <div className="subject" tabIndex={0}>
      <span className="subject-title-display">
        <h2>{subject.title}</h2>
      </span>
      <span className="subject-info-display">
        <div className="subject-type-display">{subject.type}</div>
        <div className="subject-day-display">{subject.days}</div>
        <div className="subject-time-display">{subject.timeStart} - {subject.timeEnd}</div>
      </span>
      <span className="subject-color-display">
        <div className="circle-color" style={{backgroundColor: subject.color}}></div>
      </span>
      <span className="remove-subject">
        <FaTimes onClick={() => onDelete(subject.id)}/>
      </span>
    </div>
  )
}

export default Subject