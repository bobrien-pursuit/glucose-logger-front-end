import { useState, useEffect } from "react";
import Entry from "./Entry";
import {} from "react-router-dom"; 

const API = import.meta.env.VITE_API_URL;

function Entries () {
    const [entries, setEntries] = useState([]);
    const [value, setValue] = useState(null);

    const handleChange = (e) => {
        setValue(e.target.value);
   };

    useEffect(() => {
        fetch(`${API}/entries`)
        .then(res => res.json())
        .then(res => {

            const carbslh = res.sort((a,b) => (a.carbs - b.carbs));
            const carbshl = res.sort((a,b) => (b.carbs - a.carbs));
            const callh = res.sort((a,b) => (a.calories - b.calories));
            const calhl = res.sort((a,b) => (b.calories - a.calories));
            const fatlh = res.sort((a,b) => (a.fat - b.fat));
            const fathl = res.sort((a,b) => (b.fat - a.fat));
            const glucoselh = res.sort((a,b) => (a.glucose_gdl - b.glucose_gdl));
            const glucosehl = res.sort((a,b) => (b.glucose_gdl - a.glucose_gdl));
            const a1clh = res.sort((a,b) => (a.a1c - b.a1c));
            const a1chl = res.sort((a,b) => (b.a1c - a.a1c));

            switch(value) {

                case "carbslh":
                    console.log(carbslh)
                    setEntries(carbslh);
                    break;
                case "carbshl":
                    console.log(carbshl)
                    setEntries(carbshl);
                    break;
                case "callh":
                    console.log(callh)
                    setEntries(callh);
                    break;
                case "calhl":
                    console.log(calhl)
                    setEntries(calhl);
                    break;
                case "fatlh":
                    setEntries(fatlh);
                    break;
                case "fathl":
                    setEntries(fathl);
                    break;
                case "glucoselh":
                    setEntries(glucoselh);
                    break;
                case "glucosehl":
                    setEntries(glucosehl);
                    break;
                case "a1clh":
                    setEntries(a1clh);
                    break;
                case "a1chl":
                    setEntries(a1chl);
                    break;
                default:
                    console.log(res);
                    setEntries(res);
            }

         //  console.log(res);
           // setEntries(res);
            // const sortedEntriesByFat = res.sort((a,b) => (a.fat - b.fat))
            // setEntries(sortedEntriesByFat);
        })
        .catch((err) => console.log(err));
    }, [value])

    return (
        <div>
            <select name="sort" id="sort" onChange={handleChange}>
                <option key="" value="">Sort By:</option>
                <option value="carbslh">Carbs (low to high)</option>
                <option value="carbshl">Carbs (high to low)</option>
                <option value="callh">Calories (low to high)</option>
                <option value="calhl">Calories (high to low)</option>
                <option value="fatlh">Fat (low to high)</option>
                <option value="fathl">Fat (high to low)</option>
                <option value="glucoselh">Glucose (low to high)</option>
                <option value="glucosehl">Glucose (high to low)</option>
                <option value="a1clh">A1C (low to high)</option>
                <option value="a1chl">A1C (high to low)</option>
            </select>
        <div className="entries__table">
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Meal Description</th>
                            <th>Total Carbs(g)</th>
                            <th>Total Calories</th>
                            <th>Total Fat(g)</th>
                            <th>Blood Sugar (g/Dl)</th>
                            <th>A1C</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map((entry) => {
                        return <Entry key={entry.id} entry={entry} id={entry.id} />;
                        })}
                    </tbody>
                </table>
            </main>
        </div>
        </div>
    );
}

export default Entries;