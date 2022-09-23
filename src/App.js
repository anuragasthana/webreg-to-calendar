import { useState } from 'react';

import Header from './components/Header'
import ButtonRow from './components/ButtonRow';
import Subjects from './components/Subjects';
import Modal from './components/Modal';

function App() {

  const [show, setShow] = useState(false);

  const [subjects, setSubjects] = useState([
    {
      id: 1,
      title: "CSE 12",
      section: [
        {
          type: "Lecture",
          days: "M,W,F",
          timeStart: "2:00PM",
          timeEnd: "2:50PM",
        },
        {
          type: "Discussion",
          days: "M",
          timeStart: "4:00PM",
          timeEnd: "4:50PM"
        }
      ],
      events: [],
      color: "blue"
    },
    {
      id: 2,
      title: "COGS 108",
      section: [
        {
          type: "Lecture",
          days: "Tu,Th",
          timeStart: "10:00AM",
          timeEnd: "10:50AM"
        },
        {
          type: "Discussion",
          days: "Tu",
          timeStart: "3:00PM",
          timeEnd: "3:50PM"
        }
      ],
      events: [],
      color: "green"
    },
    {
      id: 3,
      title: "PHIL 42",
      section: [
        {
          type: "Lecture",
          days: "M,W,F",
          timeStart: "11:00AM",
          timeEnd: "12:00PM"
        },
        {
          type: "Discussion",
          days: "W",
          timeStart: "1:00PM",
          timeEnd: "1:50PM"
        }
      ],
      events: [],
      color: "red"
    },
    {
      id: 4,
      title: "CSE 15L",
      section: [
        {
          type: "Lab",
          days: "Th",
          timeStart: "1:00PM",
          timeEnd: "3:50PM"
        }
      ],
      events: [],
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
        <ButtonRow subjects={subjects} onAdd={() => setShow(true)}/>
        {subjects.length > 0 ? 
        <>
        <Subjects subjects={subjects} onDelete={deleteSubject}/>
        <ButtonRow subjects={subjects} onAdd={() => setShow(true)}/>
        </>
        : <h2>No subjects to display. Click "Add Subject" to get started!</h2>}
        <Modal show={show} onClose={() => setShow(false)}/>  
      </div>
      
  );
}

export default App;
