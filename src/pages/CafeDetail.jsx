import { useState, useEffect } from "react"
import { useParams, Link } from "react-router"

function CafeDetail(){
    const {id} = useParams()
    const [cafe, setCafe] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        fetch(`http://localhost:3000/cafes/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setCafe(data)
            setLoading(false)
        })
        .catch((err) => {
            setError(err.message)
            setLoading(false)
        })
    }, [id])

    if (loading) return <p>Loading cafe...</p>
    if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h1>{cafe.cafeName}</h1>
      <p>Location: {cafe.location}</p>
      <p>Item Ordered: {cafe.itemOrdered}</p>
      <p>Rating: {cafe.rating}</p>
      <p>Would Return: {cafe.wouldReturn ? "Yes" : "No"}</p>
      <p>Price Range: {cafe.priceRange}</p>
      <Link to="/">Back to List</Link>
    </div>
  )
}

export default CafeDetail