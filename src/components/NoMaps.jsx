import { ChevronDown, Plus, Settings2, Sparkles } from "lucide-react";
import React, { useState } from "react";
import noMap from "../assets/NoMaps.png";
import { Link } from "react-router-dom";

function NoMaps() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("all");

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
    setIsDropdownOpen(false);
  };

  const statusOptions = [
    { value: "all", label: "All" },
    { value: "room1", label: "Room1" },
    { value: "room2", label: "Room2" },
    { value: "room3", label: "Room3" },
  ];

  const ICON_COLOR = "text-[rgba(55,58,65,1)]";

  const selectedStatusLabel =
    statusOptions.find((option) => option.value === selectedStatus)?.label ||
    "All";

  return (
    <div className="min-h-screen text-white p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl font-bold">Machines Map</h1>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <Link to="create">
            <button className="flex items-center justify-center gap-2 border border-[#373A41] hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors">
              <div className="w-6 h-6 border border-[#373A41] rounded-full flex items-center justify-center text-[rgba(206,207,210,1)]">
                <Plus size={16} className="text-gray-400" />
              </div>
              <span className="text-[rgba(206,207,210,1)]">Add Machine</span>
            </button>
          </Link>

          {/* Status Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex text-[rgba(206,207,210,1)] items-center justify-center gap-2 border border-[#373A41] hover:bg-gray-600 px-4 py-2 transition-colors rounded-lg"
            >
              <div className="flex items-center gap-2">
                <Settings2 size={20} className="text-gray-400" />
                <span>{selectedStatusLabel}</span>
              </div>
              <ChevronDown
                size={16}
                className={`transition-transform text-gray-400 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-full sm:w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 z-10">
                {statusOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleStatusSelect(option.value)}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-700 text-[rgba(206,207,210,1)] transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      selectedStatus === option.value ? "bg-gray-700" : ""
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-5"
          onClick={() => setIsDropdownOpen(false)}
        ></div>
      )}
      {/* Empty State */}
      <div className="flex flex-col items-center justify-center flex-1 min-h-screen text-center">
        {/* Machine Icon with floating dots */}
        <div className="relative mb-8">
          {/* Floating dots */}
          <div className="absolute -top-4 -left-8 w-2 h-2 bg-gray-600 rounded-full animate-pulse"></div>
          <div className="absolute -top-8 left-12 w-2 h-2 bg-gray-600 rounded-full animate-pulse delay-300"></div>
          <div className="absolute -top-2 -right-6 w-2 h-2 bg-gray-600 rounded-full animate-pulse delay-700"></div>
          <div className="absolute top-8 -left-12 w-2 h-2 bg-gray-600 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-12 right-8 w-2 h-2 bg-gray-600 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-4 -left-4 w-2 h-2 bg-gray-600 rounded-full animate-pulse delay-200"></div>

          {/* Your uploaded image */}
          <div className="w-48 h-48 flex items-center justify-center">
            <img
              src={noMap}
              alt="No machines available"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <h1 className="text-xl font-bold">No Machine found</h1>
        {/* Message */}
        <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
          Add your first machine or use smart scan to import machine working on
          network
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors border border-gray-700">
            <Sparkles size={20} />
            Smart Search
          </button>

          <Link to="create">
            <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors">
              <Plus size={20} />
              Add Machine
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NoMaps;
