import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry({ planets, handleAddPlanet }) {

    // console.log(planets)
    // state for search
    const [searchString, setSearchString] = useState('')



    return (
        <div className="registry">
            <Search searchString={searchString} setSearchString={setSearchString} />
            <div className="content">
                <PlanetList planets={planets} searchString={searchString} />
                <NewPlanetForm handleAddPlanet={handleAddPlanet} />
            </div>
        </div>
    )
}

export default Registry;