import React ,{ useState } from 'react'
import Charts from '../components/Charts';
import InputForm from '../components/Inputforms';
import { toast, ToastContainer } from 'react-toastify';

function Home() {
  const handleGetPrediction = async ({ meal, date }) => {
    try {
      const response = await fetch("https://your-api-url.com/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ meal, date }),
      });

      const data = await response.json();
      setTodayPrediction(data.prediction);
      setAccuracy(data.accuracy)
    } catch (error) {
      console.error("Error fetching prediction:", error);
      toast.warn("Failed to fetch data")
    }
  };
  const [accuracy,setAccuracy] = useState(92.5);
  const [todayPrediction, setTodayPrediction] = useState(367);
  const money = 3456
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="text-center mb-6">
        
        <h1 className="text-3xl font-bold text-gray-800">HARFEP DineSmart</h1>
        <p className="text-gray-600">Food Demand Prediction Dashboard</p>
      </div>
      <ToastContainer/>

      {/* Input Field */}
      <div className="text-center mb-12">
      
      <InputForm onGetPrediction={handleGetPrediction} />
      </div>
      
      {/* Metrics Cards */}
      <div className="flex justify-center gap-6 mb-8">
        <div className="bg-white shadow-lg p-4 rounded-lg w-60 text-center">
          <h2 className="text-gray-600 text-lg">Model Accuracy</h2>
          <p className="text-2xl font-bold text-green-500">{accuracy}%</p>
        </div>
        <div className="bg-white shadow-lg p-4 rounded-lg w-60 text-center">
          <h2 className="text-gray-600 text-lg">Today's Estimate</h2>
          <p className="text-2xl font-bold text-blue-500">{todayPrediction} servings</p>
        </div>
        <div className="bg-white shadow-lg p-4 rounded-lg w-60 text-center">
          <h2 className="text-gray-600 text-lg">Money Saved</h2>
          <p className="text-2xl font-bold text-orange-500">${money}</p>
        </div>  
      </div>
      
      {/* Charts Section */}
      <Charts/>
      
    </div>
  );
}

export default Home;


