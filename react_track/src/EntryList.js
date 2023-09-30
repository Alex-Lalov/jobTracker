export default function EntryList({ entries, handleToggle, handleDelete}){
    return (
        <div id="cards">
            {entries.map((entry) => (
            <div className="card">
                <div className={`delete-icon ${entry.selected ? 'show' : 'hide'}`} onClick={ () => handleDelete(entry.id)}>
                    ✕
                </div>
                <div key={entry.id} className={`entry ${entry.selected ? 'blurred' : ''}`} onClick={() => handleToggle(entry.id)}>
                    <div className="entry-header">
                        <span className="company">{entry.job_title}@{entry.company}</span>
                    </div>
                    <div className="entry-body">
                        <div className="inner-entry-body">Description: {entry.description}</div>
                    </div>
                    <div className="entry-footer">
                        <span className="date">{entry.date_string}</span>
                        <span className="status">Status: {entry.status}</span>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}