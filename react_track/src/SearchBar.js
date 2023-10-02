import './SearchBar.css';

function SearchBar({ setSearchTerm, searchTerm }){
    
    return (
        <div className="search-box">
            <input className="search-txt" type="text" name="" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)}/>
            <button className='search-btn'>
                <i className='fas fa-search'></i>
            </button>
        </div>
    )

}

export default SearchBar;