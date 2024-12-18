import React from 'react'
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

function Charts() {
      // Mock Data
  const last7Days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const predictedDemand = [320, 340, 310, 330, 350, 360, 370]; // Sample predictions
  const barData = [300, 330, 305, 325, 345, 355, 365]; // Bar chart data

  

  // Line Chart Configuration
  const lineChartData = {
    labels: last7Days,
    datasets: [
      {
        label: "Predicted Demand",
        data: predictedDemand,
        borderColor: "rgba(59, 130, 246, 1)", // Blue
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.4,
      },
    ],
  };

  // Bar Chart Configuration
  const barChartData = {
    labels: last7Days,
    datasets: [
      {
        label: "Actual Demand",
        data: barData,
        backgroundColor: "rgba(16, 185, 129, 0.6)", // Green
      },
    ],
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white shadow-lg p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Food Demand Trend (7 Days)</h2>
          <Line data={lineChartData} />
        </div>

        {/* Bar Chart */}
        <div className="bg-white shadow-lg p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Actual Demand (7 Days)</h2>
          <Bar data={barChartData} />
        </div>
    </div>
  )
}

export default Charts