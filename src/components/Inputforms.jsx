import React, { useState } from "react";
import { toast } from "react-toastify";

const InputForm = ({ onGetPrediction }) => {
  const [meal, setMeal] = useState("Breakfast");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date) {
      toast.warning("Please select a date!")
      return;
    }
    onGetPrediction({ meal, date });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg p-6 rounded-lg mb-8 max-w-md mx-auto"
    >
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Get Food Demand Prediction</h2>

      {/* Meal Selector */}
      <div className="mb-4">
        <label htmlFor="meal" className="block text-sm font-medium text-gray-700 mb-1">
          Meal of the Day
        </label>
        <select
          id="meal"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
        </select>
      </div>

      {/* Date Selector */}
      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
          Select Date
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Get Prediction Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Get Prediction
      </button>
    </form>
  );
};

export default InputForm;
