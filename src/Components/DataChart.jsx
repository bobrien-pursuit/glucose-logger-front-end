import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import ChartPage from "../Pages/ChartPage.jsx";
const API = import.meta.env.VITE_API_URL;
// Chart.register(CategoryScale);

function DataChart() {

    let navigate = useNavigate();

    const [data, setData] = useState ([]);

    //grab the whole array of objects from API

    useEffect (() => {
        fetch(`${API}/entries`)
        .then(res => res.json())
        .then(res => setData(res))
        .catch((err) => console.log({error: "Server error"}))
    }, [data]);

    const [chartData, setChartData] = useState({
        labels: data.map((datum) => datum.date_surrogate), 
        datasets: [
            {
                label: "Glucose Readings",
                data: data.map((datum) => datum.glucose_gdl),
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

    return (
      <div><ChartPage chartData={chartData}/></div>
    );
}

export default DataChart;