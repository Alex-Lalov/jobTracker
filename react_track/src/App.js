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

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

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
    setIsOverlayOpen(false);
  };

  return (
    <div className="App">
      <div className='flex-container'>
        <h1 className='h1-title'>Job Tracker</h1>
      </div>
      <br />
      <div className='cards-body'>
        <EntryList entries={entries}/>
      </div>
      <div className='form'>
        <button className='circular-button' onClick={() => setIsOverlayOpen(!isOverlayOpen)}>+</button>
        {isOverlayOpen && <EntryForm newEntry={newEntry} setNewEntry={setNewEntry} handleAddEntry={handleAddEntry}/>}
      </div>
    </div>
  );
}

export default App;
