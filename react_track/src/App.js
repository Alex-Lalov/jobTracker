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

  return (
    <div className="App">
      <h1>Applications</h1>
      <button className='add-button' onClick={() => setShowForm(!showForm)}>+</button>
      {showForm && <EntryForm newEntry={newEntry} setNewEntry={setNewEntry} handleAddEntry={handleAddEntry}/>}
      <br />
      <div>
      <EntryList entries={entries}/>
      </div>
    </div>
  );
}

export default App;
