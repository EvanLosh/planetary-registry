import React, { useState } from "react"
import { v4 as uuid } from "uuid"

function NewPlanetForm({ handleAddPlanet }) {

    // state for form values
    const [form, setForm] = useState({
        name: '',
        climate: '',
        terrain: '',
        population: 0
    })

    function onInputChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    // call prop function from App to post to database
    function handleSubmit(e) {
        e.preventDefault()
        handleAddPlanet(form)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={form.name} onChange={onInputChange} />
            <input type="text" name="climate" placeholder="Climate" value={form.climate} onChange={onInputChange} />
            <input type="text" name="terrain" placeholder="Terrain" value={form.terrain} onChange={onInputChange} />
            <input type="text" name="population" placeholder="Population" value={form.population} onChange={onInputChange} />
            <input type="submit" value="Add" />
        </form>
    );
}

export default NewPlanetForm;