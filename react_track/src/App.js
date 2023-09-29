import React, { useState, useEffect } from 'react';
import './App.css';

class Entry {
  constructor(company, job_title, description, status){
    this.company = company;
    this.job_title = job_title;
    this.description = description;
    this.status = status;
    const date = new Date();
    this.date_string = date.toDateString()
    this.id = date.toISOString();
  }
}

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

      {showForm && (
        <div className='form-container'>
          <form onSubmit={handleAddEntry}>
            <input 
              type="text" 
              placeholder="Company" 
              value={newEntry.company} 
              onChange={(e) => setNewEntry({...newEntry, company: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="Job Title" 
              value={newEntry.job_title} 
              onChange={(e) => setNewEntry({...newEntry, job_title: e.target.value})}
            />
            <input 
              rows="4"
              cols="50" 
              placeholder="Description"
              value={newEntry.description}
              onChange={(e) => setNewEntry({...newEntry, description: e.target.value})}
            ></input>
            <input 
              type="text" 
              placeholder="Status" 
              value={newEntry.status} 
              onChange={(e) => setNewEntry({...newEntry, status: e.target.value})}
            />
            <br />
            <button type="submit">Add Entry</button>
          </form>
        </div>
      )}

      <br />
      <div>
      {entries.map((entry) => (
        <div key={entry.id} className="entry entry-container">
          <div className="entry-header">
            <span>{entry.company}</span>
            <span>{entry.date_string}</span>
          </div>
          <div className="entry-body">
            <div>Job Title: {entry.job_title}</div>
            <div>Description: {entry.description}</div>
          </div>
          <div className="entry-footer">
            Status: {entry.status}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default App;
