import { useState } from "react";

const StarshipSearch = ({ search, numberOfStarships }) => {
    const [searchTerm, setSearchTerm] = useState("")
    const [prevSearchTerm, setPrevSearchTerm] = useState("")

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        search(searchTerm)
        setPrevSearchTerm(searchTerm)
        setSearchTerm("")
    }

    const handleClick = () => {
        search("")
        setPrevSearchTerm("")
    }

    return (
        <section>
            <h2>Search</h2>
            <p>Number of results: {numberOfStarships}</p>
            <p>{prevSearchTerm !== "" ? "Previous search: " + prevSearchTerm : "Search for a starship by name"}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search Term: </label>
                <input type="text" id="search" name="search" value={searchTerm} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            <button onClick={handleClick}>Show all starships</button>
        </section>
    )
}

export default StarshipSearch;