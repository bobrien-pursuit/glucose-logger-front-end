
function Entry({ entry, id}) {
    return (
        <tr>
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