export default function EntryList({ entries, handleToggle, handleDelete, handleEdit, handleStatusUpdate}){
    return (
        <div id="cards">
            {entries.map((entry) => (
            <div className={`card ${entry.editing ? 'editing' : ''}`}>
                <div className={`delete-icon ${entry.selected ? 'show' : 'hide'}`} onClick={ () => handleDelete(entry.id)}>
                    ✕
                </div>
                <div className={`edit-icon ${entry.selected ? 'show' : 'hide'}`} onClick={ () => handleEdit(entry.id)}>
                    <i class="fa-solid fa-pen"></i>
                </div>
                <div key={entry.id} className={`entry ${entry.selected ? 'blurred' : ''} ${entry.editing ? 'editing' : ''}`} onClick={() => handleToggle(entry.id)}>
                    <div className="entry-header">
                        <span className="company">{entry.job_title}@{entry.company}</span>
                    </div>
                    <div className="entry-body">
                        <div className="inner-entry-body">Description: {entry.description}</div>
                    </div>
                    <div className="entry-footer">
                        <span className="date">{entry.date_string}</span>
                        <span className="status">Status: {entry.editing ? (
                            <input 
                                className="status-update"
                                type="text" 
                                defaultValue={entry.status}
                                onBlur={(e) => handleStatusUpdate(e, entry.id)}
                            />
                            ) : (
                                entry.status
                            )}
                        </span>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}