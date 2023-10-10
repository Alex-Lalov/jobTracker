import './Filter.css';

function Filter({ filters, setFilters }){

    const handleClick = () => {
        setFilters({'date': !filters.date, 'status': !filters.status})
    }
    
    return (
        <div className="filter">
            <button className='filter-btn' onClick={handleClick}>
                <i className={filters.status ? "fa-solid fa-filter fa-2x" : "fa-solid fa-calendar-days fa-2x"}></i>
            </button>
        </div>
    )
}
export default Filter;