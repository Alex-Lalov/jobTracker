import './SearchBar.css';

function SearchBar({ setSearchTerm, searchTerm }){

    return (
        <div className="search-box">
            <input 
                className="search-txt"
                style={searchTerm ? {width: '240px', padding: '0 6px'} : {}}
                type="text" 
                name="" 
                placeholder="Search..." 
                onChange={(e) => setSearchTerm(e.target.value)}/>
            <button className='search-btn'>
                <i className='fas fa-search fa-2x'></i>
            </button>
        </div>
    )

}

export default SearchBar;