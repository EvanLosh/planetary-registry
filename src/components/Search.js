import React from "react"

function Search({ searchString, setSearchString }) {

    function onSearchChange(e) {
        setSearchString(e.target.value)
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                onChange={onSearchChange}
                value={searchString}
            />
        </div>
    );
}

export default Search;