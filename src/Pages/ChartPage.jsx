import DataChart from "../Components/DataChart";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";

const API = import.meta.env.VITE_API_URL;



function ChartPage() {

    const [data, setData] = useState ([]);

    useEffect (() => {
        fetch(`${API}/entries`)
        .then(res => res.json())
        .then(res => setData(res))
        .catch((err) => console.log({error: "Server error"}))
    }, []);
    
    const [chartData, setChartData] = useState({
        labels: data.map((datum) => datum.date_surrogate), 
        datasets: [
            {
                label: "Glucose Readings",
                data: data.map((datum) => datum.carbs),
                backgroundColor: [
                    "lightred",
                    "lightblue",
                    "lightgreen",
                    "lightyellow"
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    })

    console.log(data);

    return (
        <div className="chart-container">
        <h2 style={{ textAlign: "center" }}>Line Chart</h2>
        <Line
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Users Gained between 2016-2020"
              },
              legend: {
                display: false
              }
            }
          }}
        />
      </div>
    );
}

export default ChartPage;