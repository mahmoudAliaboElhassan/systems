import React, { useState } from "react";
import {
  Plus,
  Play,
  RotateCcw,
  MonitorSpeaker,
  Edit,
  User,
} from "lucide-react";
import NoVirtualMachine from "../../../../components/NoVirtualMachine";
import { useNavigate } from "react-router-dom";

// Mock data arrays - replace with database calls in the future
const virtualMachinesData = [
  {
    id: 1,
    name: "Updates",
    description: "apps updater",
    status: "ON",
    access: "D:\\",
    cpu: "2 CORE",
    ram: "4 GB",
    lastChanges: "14/07/25",
    icon: "📦",
    color: "bg-green-500",
  },
  {
    id: 2,
    name: "Image",
    description: "image updater",
    status: "OFF",
    access: "Null",
    cpu: "2 CORE",
    ram: "4 GB",
    lastChanges: "14/07/25",
    icon: "📦",
    color: "bg-green-500",
  },
];

const historyData = [
  {
    id: 1,
    info: "Disk 2 - (Game Disk)",
    description: "update valorant",
    status: "Saving 15%",
    statusType: "saving",
    type: "Update",
    date: "31/07/25 12:47",
    user: {
      name: "Mohamed Shaheen",
      role: "Admin",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
  },
  {
    id: 2,
    info: "Windows 11 PRO",
    description: "windows update",
    status: "Completed",
    statusType: "completed",
    type: "Image",
    date: "31/07/25 12:47",
    user: {
      name: "Mohamed Shaheen",
      role: "Admin",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
  },
  {
    id: 3,
    info: "Disk 2 - (Game Disk)",
    description: "update valorant",
    status: "Completed",
    statusType: "completed",
    type: "Update",
    date: "31/07/25 12:47",
    user: {
      name: "Mohamed Shaheen",
      role: "Admin",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
  },
  {
    id: 4,
    info: "Disk 2 - (Game Disk)",
    description: "update valorant",
    status: "Completed",
    statusType: "completed",
    type: "Update",
    date: "31/07/25 12:47",
    user: {
      name: "Mohamed Shaheen",
      role: "Admin",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
  },
  {
    id: 5,
    info: "Disk 2 - (Game Disk)",
    description: "update valorant",
    status: "Completed",
    statusType: "completed",
    type: "Update",
    date: "31/07/25 12:47",
    user: {
      name: "Mohamed Shaheen",
      role: "Admin",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
  },
  {
    id: 6,
    info: "Disk 2 - (Game Disk)",
    description: "update valorant",
    status: "Completed",
    statusType: "completed",
    type: "Update",
    date: "31/07/25 12:47",
    user: {
      name: "Mohamed Shaheen",
      role: "Admin",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
  },
];

const paginationData = {
  currentPage: 1,
  totalPages: 4,
  totalItems: 24,
  itemsPerPage: 6,
};

function VirtualMachines() {
  const [currentPage, setCurrentPage] = useState(paginationData.currentPage);

  const navigate = useNavigate();

  const getStatusBadge = (status, statusType) => {
    switch (statusType) {
      case "saving":
        return "bg-yellow-600 text-yellow-100";
      case "completed":
        return "bg-green-600 text-green-100";
      default:
        return "bg-gray-600 text-gray-100";
    }
  };

  const getVMStatusBadge = (status) => {
    return status === "ON"
      ? "bg-green-600 text-green-100 px-3 py-1 rounded-full text-xs font-medium"
      : "bg-gray-600 text-gray-100 px-3 py-1 rounded-full text-xs font-medium";
  };

  const getTypeBadge = (type) => {
    switch (type.toLowerCase()) {
      case "update":
        return "bg-blue-600 text-blue-100";
      case "image":
        return "bg-purple-600 text-purple-100";
      default:
        return "bg-gray-600 text-gray-100";
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < paginationData.totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleCreateVM = () => {
    console.log("Navigate to create VM");
    navigate("create");
    // Add your navigation logic here
  };

  const handleVMAction = (action, vmId) => {
    console.log(`${action} VM:`, vmId);
    // Add your VM action logic here
  };

  // Show NoData component if no virtual machines
  if (virtualMachinesData.length === 0) {
    return <NoVirtualMachine />;
  }

  return (
    <div className="min-h-screen text-white p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl font-bold">Virtual Machines</h1>

        <button
          onClick={handleCreateVM}
          className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 px-4 py-2 rounded-lg transition-colors"
        >
          <div className="w-6 h-6 border border-gray-600 rounded-full flex items-center justify-center">
            <Plus size={16} className="text-gray-400" />
          </div>
          Create VM
        </button>
      </div>

      {/* Virtual Machines Table */}
      <div className="backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden mb-8">
        {/* Horizontal scroll wrapper */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]"> {/* Minimum width to ensure proper layout */}
            {/* Table Header */}
            <div className="grid grid-cols-7 gap-4 p-4 border-b border-gray-800 bg-gray-900/30">
              <div className="text-gray-400 text-sm font-medium min-w-[200px]">VM</div>
              <div className="text-gray-400 text-sm font-medium min-w-[80px]">Status</div>
              <div className="text-gray-400 text-sm font-medium min-w-[80px]">Access</div>
              <div className="text-gray-400 text-sm font-medium min-w-[80px]">CPU</div>
              <div className="text-gray-400 text-sm font-medium min-w-[80px]">RAM</div>
              <div className="text-gray-400 text-sm font-medium min-w-[100px]">Last Changes</div>
              <div className="text-gray-400 text-sm font-medium min-w-[140px]">Actions</div>
            </div>

            {/* Table Body */}
            {virtualMachinesData.map((vm) => (
              <div
                key={vm.id}
                className="grid grid-cols-7 gap-4 p-4 border-b border-gray-800 hover:bg-gray-800/30 transition-colors"
              >
                {/* VM Info */}
                <div className="flex items-center gap-3 min-w-[200px]">
                  <div
                    className={`w-12 h-12 ${vm.color} rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}
                  >
                    {vm.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-white font-medium truncate">{vm.name}</div>
                    <div className="text-gray-400 text-sm truncate">{vm.description}</div>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center min-w-[80px]">
                  <span className={`${getVMStatusBadge(vm.status)} whitespace-nowrap`}>{vm.status}</span>
                </div>

                {/* Access */}
                <div className="flex items-center text-gray-300 min-w-[80px] truncate">{vm.access}</div>

                {/* CPU */}
                <div className="flex items-center min-w-[80px]">
                  <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                    {vm.cpu}
                  </span>
                </div>

                {/* RAM */}
                <div className="flex items-center min-w-[80px]">
                  <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                    {vm.ram}
                  </span>
                </div>

                {/* Last Changes */}
                <div className="flex items-center text-gray-300 min-w-[100px] whitespace-nowrap">
                  {vm.lastChanges}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 min-w-[140px]">
                  <button
                    onClick={() => handleVMAction("start", vm.id)}
                    className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                    title="Start/Stop"
                  >
                    <Play size={14} className="text-gray-400" />
                  </button>
                  <button
                    onClick={() => handleVMAction("restart", vm.id)}
                    className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                    title="Restart"
                  >
                    <RotateCcw size={14} className="text-gray-400" />
                  </button>
                  <button
                    onClick={() => handleVMAction("console", vm.id)}
                    className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                    title="Console"
                  >
                    <MonitorSpeaker size={14} className="text-gray-400" />
                  </button>
                  <button
                    onClick={() => handleVMAction("edit", vm.id)}
                    className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                    title="Edit"
                  >
                    <Edit size={14} className="text-gray-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="mb-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white mb-2">History</h2>
          <p className="text-gray-400">Monitor your VM changes</p>
        </div>

        {/* History Table */}
        <div className="backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
          {/* Horizontal scroll wrapper */}
          <div className="overflow-x-auto">
            <div className="min-w-[700px]"> {/* Minimum width for history table */}
              {/* History Header */}
              <div className="grid grid-cols-5 gap-4 p-4 border-b border-gray-800 bg-gray-900/30">
                <div className="text-gray-400 text-sm font-medium min-w-[200px]">Info</div>
                <div className="text-gray-400 text-sm font-medium min-w-[100px]">Status</div>
                <div className="text-gray-400 text-sm font-medium min-w-[80px]">Type</div>
                <div className="text-gray-400 text-sm font-medium min-w-[120px]">Date</div>
                <div className="text-gray-400 text-sm font-medium min-w-[150px]">User</div>
              </div>

              {/* History Body */}
              {historyData.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-5 gap-4 p-4 border-b border-gray-800 hover:bg-gray-800/30 transition-colors"
                >
                  {/* Info */}
                  <div className="min-w-[200px]">
                    <div className="text-white font-medium truncate">{item.info}</div>
                    <div className="text-gray-400 text-sm truncate">{item.description}</div>
                  </div>

                  {/* Status */}
                  <div className="flex items-center min-w-[100px]">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusBadge(
                        item.status,
                        item.statusType
                      )}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Type */}
                  <div className="flex items-center min-w-[80px]">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getTypeBadge(
                        item.type
                      )}`}
                    >
                      {item.type}
                    </span>
                  </div>

                  {/* Date */}
                  <div className="flex items-center text-gray-300 min-w-[120px] whitespace-nowrap">{item.date}</div>

                  {/* User */}
                  <div className="flex items-center gap-3 min-w-[150px]">
                    <img
                      src={item.user.avatar}
                      alt={item.user.name}
                      className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="text-white text-sm font-medium truncate">
                        {item.user.name}
                      </div>
                      <div className="text-gray-400 text-xs truncate">{item.user.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
          <div className="text-gray-400 text-sm">
            Page {currentPage} of {paginationData.totalPages}
          </div>

          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === 1
                  ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === paginationData.totalPages}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === paginationData.totalPages
                  ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualMachines;