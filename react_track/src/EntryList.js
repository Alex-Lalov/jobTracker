export default function EntryList({ entries }){
    return (
        <div id="cards">
            {entries.map((entry) => (
                <div key={entry.id} className="entry">
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
    )
}