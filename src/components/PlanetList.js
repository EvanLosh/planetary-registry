import React from "react"
import Planet from "./Planet"

function PlanetList({ planets, searchString }) {

    const planetComponents = planets.filter(
        (planet) => { return (planet.name.includes(searchString) || planet.climate.includes(searchString) || planet.terrain.includes(searchString) || planet.population.includes(searchString)) }
    ).map(planet =>
        <Planet key={planet.id} name={planet.name} climate={planet.climate} terrain={planet.terrain} population={planet.population} />
    )

    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>
                {planetComponents}
            </tbody>
        </table>
    );
}

export default PlanetList;