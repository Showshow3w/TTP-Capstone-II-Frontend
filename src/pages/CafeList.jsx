import { useState, useEffect } from "react"
import { Link } from "react-router"

function CafeList() {
  const [cafes, setCafes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/cafes")
      .then((response) => response.json())
      .then((data) => {
        setCafes(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading cafes...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h1>Cafe List</h1>
      <div className="cafe-list">
        {cafes.map((cafe) => (
            <div key={cafe.id} className="cafe-card">
                <h2>{cafe.cafeName}</h2>
                <Link to={`/cafes/${cafe.id}`}>View Details</Link>
            </div>
      ))}
      </div>
    </div>
  )
}

export default CafeList