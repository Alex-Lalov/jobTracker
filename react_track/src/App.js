import React, { useState, useEffect } from 'react';
import Entry from './Entry';
import EntryForm from './EntryForm';
import EntryList from './EntryList';
import SearchBar from './SearchBar';
import './App.css';


function App() {
  //Use State Hooks (entries, entry, searchterm, overlay)
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({
    company: '',
    job_title: '',
    description: '',
    status: 'Applied'
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  //Use Effect Hooks Load and Store
  useEffect(() => {
    const savedEntries = localStorage.getItem('entries');
    if (savedEntries){
      setEntries(JSON.parse(savedEntries))
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries])

  const filteredEntries = entries.filter(entry =>
    entry.job_title.toLowerCase().includes(searchTerm.toLowerCase()) || entry.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      status: 'Applied'
    })
    setIsOverlayOpen(false);
  };

  const handleToggle = (id) => {
    const target = entries.find(entry => entry.id === id);
    if (!target.editing) {
      setEntries(entries.map(entry => entry.id === id ? { ...entry, selected: !entry.selected } : {...entry, selected: false, editing: false}));
    }
  };

  const handleDelete = (id) => {
    const updatedEntries = entries.filter(entry => entry.id !== id);
    setEntries(updatedEntries);
  }

  const handleEdit = (id) => {
    setEntries(entries.map(entry => entry.id === id ? { ...entry, selected:!entry.selected, editing: !entry.editing } : entry));
  }

  const handleStatusUpdate = (e, id) => {
    e.preventDefault();
    const newStatus = e.target.value;
    setEntries(entries.map(entry => entry.id === id ? {...entry, status: newStatus, editing: false} : entry));
  }

  return (
    <div className="App">
      <div className='flex-container'>
        <h1 className='h1-title'> Job Tracker </h1>
      </div>
      <div className='flex-container banner'>
        <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
      </div>
      <div className='cards-body'>
        <EntryList entries={filteredEntries} handleToggle={handleToggle} handleDelete={handleDelete} handleEdit={handleEdit} handleStatusUpdate={handleStatusUpdate}/>
      </div>
      <div className='form'>
        <button className='circular-button' onClick={() => setIsOverlayOpen(!isOverlayOpen)}>+</button>
        {isOverlayOpen && <EntryForm newEntry={newEntry} setNewEntry={setNewEntry} handleAddEntry={handleAddEntry}/>}
      </div>
    </div>
  );
}

export default App;
