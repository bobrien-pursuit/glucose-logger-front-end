import DataChart from "../Components/DataChart";
import { Line } from "react-chartjs-2";

function ChartPage({chartData}) {
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