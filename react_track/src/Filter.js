import './Filter.css';

function Filter({ filters, setFilters }){
    
    return (
        <div className="filter">
            <button className='filter-btn' onClick={() => {
                setFilters({'date': !filters.date, 'status': false});
                console.log(filters)
            }}>
                <i className="fa-solid fa-filter"></i>
            </button>
        </div>
    )

}

export default Filter;