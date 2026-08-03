import { useState, useEffect } from "react"
import { useParams, Link } from "react-router"
import { useNavigate } from "react-router"

function CafeDetail(){
    const {id} = useParams()
    const [cafe, setCafe] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const navigate = useNavigate()


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

    const handleDelete = async () => {
        await fetch (`http://localhost:3000/cafes/${id}`,{
            method: "DELETE",
        })
        navigate("/")
    }

    const priceLabels = {
    "$": "Affordable",
    "$$": "Moderate",
    "$$$": "Expensive"
}

  return (
    <div className="detail-card">
      <h1>{cafe.cafeName}</h1>
      <p>Location: {cafe.location}</p>
      <p>Item Ordered: {cafe.itemOrdered}</p>
      <p>Rating: {cafe.rating}</p>
      <p>Would Return: {cafe.wouldReturn ? "Yes" : "No"}</p>
      <p>Price Range: {cafe.priceRange} ({priceLabels[cafe.priceRange]})</p>
      <div className="actions">
        <Link to="/">Back to List</Link>
        <Link to={`/edit/${cafe.id}`}>Edit</Link>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div> 
    </div>
  )
}

export default CafeDetail