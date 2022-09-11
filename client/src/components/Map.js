import { useState } from "react"

const Map = ({ handleSubmit, userCountries }) => {
    const [showMap, setShowMap] = useState(false)

    const handleClick = () => {
        handleSubmit()
        setShowMap(true)
    }

    return (
        <>
            <button class="btn btn-primary btn-lg" onClick={handleClick}>Show map</button>
            {showMap && userCountries.map(c => {
                return <p key={c.id}>{c.name}</p>
            })}
        </>
    )
}

export default Map