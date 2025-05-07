const StarshipCard = ({ starship }) => {
    return (<div>
        <p>{starship.name}</p>
        <p>Class: {starship.starship_class}</p>
        <p>Manufacturer: {starship.manfucaturer}</p>
        <p>Model: {starship.model}</p>
    </div>)
}

export default StarshipCard;