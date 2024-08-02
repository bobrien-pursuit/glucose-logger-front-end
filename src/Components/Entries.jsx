import { useState, useEffect } from "react";
import Entry from "./Entry";

const API = import.meta.env.VITE_API_URL;

function Entries () {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        fetch(`${API}/entries`)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setEntries(res);
        })
        .catch((err) => console.log(err));
    }, [])

    return (
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
                            <th>Total Fat(g)</th>
                            <th>Blood Sugar (g/Dl)(g)</th>
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
    );
}

export default Entries;