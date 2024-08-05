import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function UpdateEntryForm() {
    let { id }  = useParams();
    let navigate = useNavigate();

    const [entry, setEntry] = useState ({
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

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="date">Date:</label>
            <input 
                id = "date"
                value = {entry.date}
                type = "date"
                onChange = {handleTextChange}
                placeholder = {entry.date}
            />
            <label htmlFor="date">Time:</label>
            <input 
                id = "time"
                value = {entry.time}
                type = "time"
                onChange = {handleTextChange}
                placeholder = {entry.time}
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
        </form>
        <br />
        <Link to={'/'}>
            <button>Cancel</button>
        </Link>
        </div>
    )
}

export default UpdateEntryForm;