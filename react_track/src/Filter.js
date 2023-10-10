import './Filter.css';

function Filter({ filters, setFilters }){

    const handleClick = () => {
        setFilters({'date': !filters.date, 'status': !filters.status})
    }
    
    return (
        <div className="filter">
            <button className='filter-btn' onClick={handleClick}>
                <i className="fa-solid fa-filter"></i>
            </button>
        </div>
    )
}

export default Filter;