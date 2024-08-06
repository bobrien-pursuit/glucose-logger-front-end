import { Link, useNavigate, useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function Entry({ entry, id}) {

    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate(`/edit/entry/${id}`);
    }

    return (
        //  <Link to={`/edit/entry/${id}`}>
        <tr onClick={handleClick}>
            <td>
                {entry.date_surrogate}
            </td>
            <td>
                {entry.time_surrogate}
            </td>
            <td>
                {entry.last_meal}
            </td>
            <td>
                {entry.carbs}
            </td>
            <td>
                {entry.calories}
            </td>
            <td>
                {entry.fat}
            </td>
            <td>
                {entry.fiber}
            </td>
            <td>
                {entry.glucose_gdl}
            </td>
            <td>
                {entry.a1c}
            </td>
        </tr>
        // </Link>
    );
}

export default Entry;