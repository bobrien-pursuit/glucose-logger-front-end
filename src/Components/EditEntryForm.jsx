import { useState } from "React";
import { useNavigate, Link } from "react-router-dom"

const API = import.meta.env.VITE_API_URL;

export default function EditEntryForm () {
    let { id } = useParams();
    const navigate = useNavigate();

    const [ entry, setEntry ] = useState [{
        // initialize object
        "date": '',
        "time": '',
        "last_meal": '',
        "cabrs": 0,
        "calories": 0,
        "fat": 0,
        "fiber": 0,
        "glucose_gdl": 0,
        "a1c": 0
    }]
}