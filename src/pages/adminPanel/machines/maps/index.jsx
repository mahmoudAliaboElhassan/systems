import { useState } from "react";
import { Plus, Settings, Edit, ChevronDown } from "lucide-react";
import NoMaps from "../../../../components/NoMaps";
import { Link } from "react-router-dom";

// Static machine data
const machineData = [
  // First row
  { id: "PC01", name: "PC01", status: "online", row: 1, col: 1 },
  { id: "PC02", name: "PC02", status: "offline", row: 1, col: 2 },
  { id: "PC03", name: "PC03", status: "offline", row: 1, col: 3 },
  { id: "PC04", name: "PC04", status: "offline", row: 1, col: 4 },
  { id: "PC05", name: "PC05", status: "offline", row: 1, col: 5 },
  { id: "PC06", name: "PC06", status: "online", row: 1, col: 6 },
  { id: "PC07", name: "PC07", status: "online", row: 1, col: 7 },
  { id: "PC08", name: "PC08", status: "offline", row: 1, col: 8 },
  { id: "PC09", name: "PC09", status: "offline", row: 1, col: 9 },
  { id: "PC10", name: "PC10", status: "online", row: 1, col: 10 },
  { id: "PC11", name: "PC11", status: "online", row: 1, col: 11 },
  { id: "PC12", name: "PC12", status: "online", row: 1, col: 12 },

  // Second row
  { id: "PC13", name: "PC13", status: "error", row: 2, col: 1 },
  { id: "PC14", name: "PC14", status: "online", row: 2, col: 2 },
  { id: "PC15", name: "PC15", status: "online", row: 2, col: 3 },
  { id: "PC16", name: "PC16", status: "online", row: 2, col: 4 },
  { id: "PC17", name: "PC17", status: "online", row: 2, col: 5 },
  { id: "PC18", name: "PC18", status: "online", row: 2, col: 6 },
  { id: "PC19", name: "PC19", status: "online", row: 2, col: 7 },
  { id: "PC20", name: "PC20", status: "online", row: 2, col: 8 },
  { id: "PC21", name: "PC21", status: "online", row: 2, col: 9 },
  { id: "PC22", name: "PC22", status: "online", row: 2, col: 10 },
  { id: "PC23", name: "PC23", status: "warning", row: 2, col: 11 },
  { id: "PC24", name: "PC24", status: "warning", row: 2, col: 12 },
];

const statusOptions = [
  { value: "all", label: "All" },
  { value: "online", label: "Online" },
  { value: "offline", label: "Offline" },
  { value: "warning", label: "Warning" },
  { value: "error", label: "Error" },
];
const ICON_COLOR = "text-[rgba(55,58,65,1)]";

function Maps() {
  const [selectedStatus, setselectedStatus] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case "online":
        return "bg-green-500 hover:bg-green-600";
      case "offline":
        return "bg-gray-600 hover:bg-gray-700";
      case "error":
        return "bg-red-500 hover:bg-red-600";
      case "warning":
        return "bg-orange-500 hover:bg-orange-600";
      default:
        return "bg-gray-600 hover:bg-gray-700";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "online":
        return "Online";
      case "offline":
        return "Offline";
      case "error":
        return "Error";
      case "warning":
        return "Warning";
      default:
        return "Unknown";
    }
  };

  // Filter machines based on selected status
  const filteredMachines =
    selectedStatus === "all"
      ? machineData
      : machineData.filter((machine) => machine.status === selectedStatus);

  const handleStatusSelect = (status) => {
    setselectedStatus(status);
    setIsDropdownOpen(false);
  };

  const selectedStatusLabel =
    statusOptions.find((option) => option.value === selectedStatus)?.label ||
    "All";
  return (
    <div>
      {machineData.length ? (
        <div className="min-h-screen  text-white p-4 sm:p-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h1 className="text-2xl font-bold">Machines Map</h1>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link to="create">
                <button className="flex items-center w-full justify-center gap-2 border border-[#373A41] hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors">
                  <div className="w-6 h-6 border border-[#373A41] rounded-full flex items-center justify-center color-[rgba(206, 207, 210, 1)]">
                    <Plus size={16} className={ICON_COLOR} />
                  </div>
                  Add Machine
                </button>
              </Link>

              {/* Status Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex color-[rgba(206, 207, 210, 1)] w-full items-center justify-center gap-2 border border-[#373A41] hover:bg-gray-600 px-4 py-2 transition-colors rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <Settings size={20} className={ICON_COLOR} />
                    <span>{selectedStatusLabel}</span>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`transition-transform  ${
                      isDropdownOpen ? "rotate-180" : ""
                    } ${ICON_COLOR}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full sm:w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 z-10">
                    {statusOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleStatusSelect(option.value)}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-700 color-[rgba(206, 207, 210, 1)] transition-colors first:rounded-t-lg last:rounded-b-lg ${
                          selectedStatus === option.value ? "bg-gray-700" : ""
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button className="flex items-center justify-center gap-2 border border-[#373A41] hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors">
                <Edit size={20} className={ICON_COLOR} />
              </button>
            </div>
          </div>
          {/* Click outside to close dropdown */}
          {isDropdownOpen && (
            <div
              className="fixed inset-0 z-5"
              onClick={() => setIsDropdownOpen(false)}
            ></div>
          )}
          {/* Machine Grid - Responsive */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12 gap-3 sm:gap-4 max-w-none">
            {filteredMachines.map((machine) => (
              <div
                key={machine.id}
                className={`
              ${getStatusColor(machine.status)}
              p-3 sm:p-4 rounded-xl transition-all duration-200 cursor-pointer
              flex flex-col items-center justify-center
              min-h-[70px] sm:min-h-[80px] relative group
              transform hover:scale-105 hover:shadow-lg
            `}
                title={`${machine.name} - ${getStatusText(machine.status)}`}
              >
                {/* Computer Icon */}
                <div className="mb-1 sm:mb-2">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                {/* Machine Name */}
                <div className="text-xs sm:text-sm font-medium text-white text-center">
                  {machine.name}
                </div>

                {/* Status Indicator */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-75"></div>

                {/* Hover Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black bg-opacity-75 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                  {getStatusText(machine.status)}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <NoMaps />
      )}
    </div>
  );
}

export default Maps;
