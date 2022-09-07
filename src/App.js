import { useState } from 'react';

import Header from './components/Header'
import ButtonRow from './components/ButtonRow';
import Subjects from './components/Subjects';

function App() {

  const [subjects, setSubjects] = useState([
    {
      id: 1,
      title: "CSE 12",
      type: "Lecture",
      days: "M,W,F",
      timeStart: "2:00PM",
      timeEnd: "2:50PM",
      color: "blue"
    },
    {
      id: 2,
      title: "COGS 108",
      type: "Lecture",
      days: "Tu,Th",
      timeStart: "10:00AM",
      timeEnd: "10:50AM",
      color: "green"
    },
    {
      id: 3,
      title: "PHIL 42",
      type: "Lecture",
      days: "M,W,F",
      timeStart: "11:00AM",
      timeEnd: "12:00PM",
      color: "red"
    },
    {
      id: 4,
      title: "CSE 15L",
      type: "Lab",
      days: "Th",
      timeStart: "1:00PM",
      timeEnd: "3:50PM",
      color: "yellow"
    }
  ]);

  // Delete subject
  const deleteSubject = (id) => {
    setSubjects(subjects.filter((subject) => subject.id !== id));
  }

  return (
      <div className='container'>
        <Header />
        <ButtonRow subjects={subjects}/>
        {subjects.length > 0 ? 
        <>
        <Subjects subjects={subjects} onDelete={deleteSubject}/>
        <ButtonRow subjects={subjects}/>
        </>
        : <h2>No subjects to display. Click "Add Subject" to get started.</h2>}  
      </div>
      
  );
}

export default App;
