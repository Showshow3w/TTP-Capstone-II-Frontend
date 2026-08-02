import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router"

function AddCafe(){
    const [cafeName, setCafeName] = useState("")
    const [location, setLocation] = useState("")
    const [itemOrdered, setItemOrdered] = useState("")
    const [rating, setRating] = useState("")
    const [wouldReturn, setWouldReturn] = useState(true)
    const [priceRange, setPriceRange] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch("http://localhost:3000/cafes", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({
                cafeName,
                location,
                itemOrdered,
                rating,
                wouldReturn,
                priceRange
             })
        })
        navigate("/")
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Cafe Name:
                    <input 
                    type= "text"
                    value={cafeName}
                    onChange = {(e) => setCafeName(e.target.value)}
                    />
                </label>
            </div>

            <div>
                <label>
                    Location:
                    <input 
                    type= "text"
                    value={location}
                    onChange = {(e) => setLocation(e.target.value)}
                    />
                </label>
            </div>

            <div>
                <label>
                    item Ordered:
                    <input 
                    type= "text"
                    value={itemOrdered}
                    onChange ={(e) => setItemOrdered(e.target.value)}
                    />
                </label>
            </div>

            <div>
                <label>
                    Rating:
                    <select value={rating} onChange={(e) => setRating(e.target.value)}>
                        <option value="">Select...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>
            </div>

            <div>
                <label>
                    Would Return:
                    <input 
                    type= "checkbox"
                    checked={wouldReturn}
                    onChange = {(e) => setWouldReturn(e.target.checked)}
                    />
                </label>
            </div>

            <div>
                <label>
                    Price Range:
                    <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                        <option value="">Select...</option>
                        <option value="$">$</option>
                        <option value="$$">$$</option>
                        <option value="$$$">$$$</option>
                    </select>
                </label>
            </div>
            <button type="submit">Add Cafe</button>
        </form>
    )
}
export default AddCafe