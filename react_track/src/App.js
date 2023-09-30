import React, { useState, useEffect } from 'react';
import Entry from './Entry';
import EntryForm from './EntryForm';
import EntryList from './EntryList';
import './App.css';


function App() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({
    company: '',
    job_title: '',
    description: '',
    status: ''
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // You can load initial entries here from a database/API if needed
  }, []);

  const handleAddEntry = (e) => {
    e.preventDefault();
    const entry = new Entry(
      newEntry.company,
      newEntry.job_title,
      newEntry.description,
      newEntry.status
    );
    setEntries([...entries, entry]);
    setNewEntry({
      company: '',
      job_title: '',
      description: '',
      status: ''
    })
    setShowForm(false);
  };

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleOnMouseMove = e => {
      const { currentTarget: target } = e;
  
      const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;
  
      setMouseX(x);
      setMouseY(y);
      
      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    };
  
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => card.addEventListener("mousemove", handleOnMouseMove));
  
    return () => {
      cards.forEach(card => card.removeEventListener("mousemove", handleOnMouseMove));
    };
  }, [entries]); // useEffect dependency array includes mouseX and mouseY
  

  return (
    <div className="App" style={{"--mouse-x": `${mouseX}px`, "--mouse-y": `${mouseY}px`}}>
      <div className='flex-container'>
        <h1 className='h1-title'>Job Tracker</h1>
      </div>
      <button className='add-button' onClick={() => setShowForm(!showForm)}>+</button>
      {showForm && <EntryForm newEntry={newEntry} setNewEntry={setNewEntry} handleAddEntry={handleAddEntry}/>}
      <br />
      <div className='cards-body'>
        <EntryList entries={entries}/>
      </div>
    </div>
  );
}

export default App;
