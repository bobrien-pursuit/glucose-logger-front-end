import { Link, useNavigate, useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function Entry({ entry, id}) {

    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate(`/edit/entry/${id}`);
    }

    return (
        <tr onClick={handleClick} className="glucose-logger__entries__table__row">
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
    );
}

export default Entry;