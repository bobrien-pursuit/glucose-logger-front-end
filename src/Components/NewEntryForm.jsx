import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function NewEntryForm() {
    const navigate = useNavigate();
    const [entry, setEntry] = useState ({
        last_meal: null,
        carbs: null,
        calories: null,
        fat: null,
        fiber: null,
        glucose_gdl: null,
        a1c: null
    });

    const addEntry = () => {
        fetch(`${API}/entries`, {
            method: 'POST',
            body: JSON.stringify(entry),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            navigate('/')
        })
        .catch(err => console.log(err))
    };

    const handleTextChange = (event) => {
        setEntry({...entry, [event.target.id]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addEntry();
        navigate('/');
    };

    return (
        <div className="glucose-logger__entry__form">
        <form onSubmit={handleSubmit}>
            <label htmlFor="last_meal">What did you eat?</label>
            <input 
                id = "last_meal"
                value = {entry.last_meal}
                type = "text"
                onChange = {handleTextChange}
                placeholder = ""
            />
            <label htmlFor="last_meal">Carbs(g)</label>
            <input 
                id = "carbs"
                value = {entry.carbs}
                type = "number"
                onChange = {handleTextChange}
                placeholder = "Enter carbs in grams"
            />
            <label htmlFor="calories">Calories</label>
             <input 
                id = "calories"
                value = {entry.last_meal}
                type = "number"
                onChange = {handleTextChange}
                placeholder = "Enter calories"
            />
            <label htmlFor="fat">Fat(g)</label>
            <input 
                id = "fat"
                value = {entry.last_meal}
                type = "number"
                onChange = {handleTextChange}
                placeholder = "Enter fat in grams"
            />
            <label htmlFor="fiber">Fiber</label>
            <input 
                id = "fiber"
                value = {entry.last_meal}
                type = "number"
                onChange = {handleTextChange}
                placeholder = "Enter fiber in grams"
            />
            <label htmlFor="glucose_gdl">Glucose</label>
            <input 
                id = "glucose_gdl"
                value = {entry.last_meal}
                type = "number"
                onChange = {handleTextChange}
                placeholder = "Enter blood glucose"
            />
            <label htmlFor="a1c">A1C</label>
            <input 
                id = "a1c"
                value = {entry.last_meal}
                type = "number"
                onChange = {handleTextChange}
                placeholder = "Enter your A1C"
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

export default NewEntryForm;