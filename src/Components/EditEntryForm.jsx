import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function UpdateEntryForm() {
    let { id }  = useParams();
    let navigate = useNavigate();

    const [entry, setEntry] = useState ({
        date_surrogate: null,
        time_surrogate: null,
        date: null,
        time: null,
        last_meal: null,
        carbs: null,
        calories: null,
        fat: null,
        fiber: null,
        glucose_gdl: null,
        a1c: null
    });

    // On page load prefil form with data from <id>

    useEffect(() => {
        fetch(`${API}/entries/${id}`)
        .then(res => res.json())
        .then(res => setEntry(res))
        .catch(err => console.log(err))
        }, []);
    

    // update entry redirect to home 
    const updateEntry = () => {
        fetch(`${API}/entries/${id}`, {
            method: 'PUT',
            body: JSON.stringify(entry),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            navigate(`/`);
        })
        .catch(err => console.log(err))
    };

    const handleTextChange = (event) => {
        setEntry({...entry, [event.target.id]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateEntry();
        navigate('/');
    };

    const handleDelete = () => {
        fetch(`${API}/entries/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(res => navigate('/'))
        .catch(err => console.log(err));
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="date_surrogate">Date:</label>
            <input 
                id = "date_surrogate"
                value = {entry.date_surrogate}
                type = "date"
                onChange = {handleTextChange}
                placeholder = {entry.date_surrogate}
            />
            <label htmlFor="time_surrogate">Time:</label>
            <input 
                id = "time_surrogate"
                value = {entry.time_surrogate}
                type = "time"
                onChange = {handleTextChange}
                placeholder = {entry.time_surrogate}
            />
            <label htmlFor="last_meal">Meal:</label>
            <input 
                id = "last_meal"
                value = {entry.last_meal}
                type = "text"
                onChange = {handleTextChange}
                placeholder = {entry.last_meal}
            />
            <label htmlFor="carbs">Carbs(g):</label>
            <input 
                id = "carbs"
                value = {entry.carbs}
                type = "number"
                onChange = {handleTextChange}
                placeholder = {entry.carbs}
            />
             <label htmlFor="calories">Calories:</label>
             <input 
                id = "calories"
                value = {entry.calries}
                type = "number"
                onChange = {handleTextChange}
                placeholder = {entry.calories}
            />
             <label htmlFor="fat">Fat(g):</label>
            <input 
                id = "fat"
                value = {entry.fat}
                type = "number"
                onChange = {handleTextChange}
                placeholder = {entry.fat}
            />
            <label htmlFor="fiber">Fiber(g):</label>
            <input 
                id = "fiber"
                value = {entry.fiber}
                type = "number"
                onChange = {handleTextChange}
                placeholder = {entry.fiber}
            />
            <label htmlFor="glucose_gdl">Glucose (g/Dl):</label>
            <input 
                id = "glucose_gdl"
                value = {entry.glucose_gdl}
                type = "number"
                onChange = {handleTextChange}
                placeholder = {entry.glucose_gdl}
            />
            <label htmlFor="a1c">A1C:</label>
            <input 
                id = "a1c"
                value = {entry.a1c}
                type = "number"
                onChange = {handleTextChange}
                placeholder = {entry.a1c}
            />
            <br />
            <br />
            <button type="submit">Submit</button>
            <br />
        <Link to={'/'}>
            <button>Cancel</button>
        </Link>
            <button onClick={handleDelete}>Delete</button>
        </form>
        </div>
    )
}

export default UpdateEntryForm;