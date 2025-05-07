import StarshipCard from "../StarshipCard/StarshipCard";

const StarshipList = ({ displayedStarships }) => {
    return (<section>
        <h2>Starships</h2>
        <ul>
            {displayedStarships.map((starship, index) => {
                return <li key={index}><StarshipCard starship={starship} /></li>
            })}
        </ul>
    </section>
    )
}

export default StarshipList;