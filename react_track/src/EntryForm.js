export default function EntryForm({ newEntry, setNewEntry, handleAddEntry }) {
    return(
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
    )
}