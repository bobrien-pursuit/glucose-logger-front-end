import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function UpdateEntryForm() {
    let { id }  = useParams();
    let navigate = useNavigate();

    const [entry, setEntry] = useState ({
        date: "",
        time: "",
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
        fetch(`${API}/edit/entry/${id}`)
        .then(res => res.json())
        .then(res => setEntry(res))
        .catch(err => console.log(err))
        }, []);
    

    // update entry redirect to home 
    const updateEntry = () => {
        fetch(`${API}/entries`, {
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
            <label htmlFor="last_meal">What did you eat?</label>
            <input 
                id = "last_meal"
                value = {entry.last_meal}
                type = "text"
                onChange = {handleTextChange}
                placeHolder = ""
            />
            <label htmlFor="last_meal">What did you eat?</label>
            <input 
                id = "carbs"
                value = {entry.last_meal}
                type = "number"
                onChange = {handleTextChange}
                placeHolder = "Enter carbs in grams"
            />
             <input 
                id = "calories"
                value = {entry.last_meal}
                type = "number"
                onChange = {handleTextChange}
                placeHolder = "Enter calories"
            />
            <input 
                id = "fat"
                value = {entry.last_meal}
                type = "number"
                onChange = {handleTextChange}
                placeHolder = "Enter fat in grams"
            />
            <input 
                id = "fiber"
                value = {entry.last_meal}
                type = "number"
                onChange = {handleTextChange}
                placeHolder = "Enter fiber in grams"
            />
            <input 
                id = "glucose_gdl"
                value = {entry.last_meal}
                type = "number"
                onChange = {handleTextChange}
                placeHolder = "Enter blood glucose"
            />
            <input 
                id = "a1c"
                value = {entry.last_meal}
                type = "number"
                onChange = {handleTextChange}
                placeHolder = "Enter your A1C"
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