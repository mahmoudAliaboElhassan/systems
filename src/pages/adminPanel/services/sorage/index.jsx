import React from "react";
import { MoreVertical, HardDrive, Github } from "lucide-react";

// Mock data based on the image
const storageData = [
  {
    id: 1,
    name: "OS",
    path: "C:\\",
    status: "Online",
    type: "NTFS",
    fileSystem: "NTFS",
    space: "256 GB",
    freeSpace: "123.4 GB",
    cache: "Auto",
    health: "100%",
    healthStatus: "excellent",
  },
  {
    id: 2,
    name: "Image",
    path: "I:\\",
    status: "Online",
    type: "NTFS",
    fileSystem: "NTFS",
    space: "512 GB",
    freeSpace: "320 GB",
    cache: "Auto",
    health: "100%",
    healthStatus: "excellent",
  },
  {
    id: 3,
    name: "DATA",
    path: "D:\\",
    status: "Online",
    type: "RAID 0",
    fileSystem: "RAID 0",
    space: "2 TB",
    freeSpace: "1.55 TB",
    cache: "Auto",
    health: "81%",
    healthStatus: "warning",
  },
  {
    id: 4,
    name: "WriteBack 1",
    path: "E:\\",
    status: "Online",
    type: "NTFS",
    fileSystem: "NTFS",
    space: "256 GB",
    freeSpace: "12.9 GB",
    cache: "Auto",
    health: "97%",
    healthStatus: "good",
  },
  {
    id: 5,
    name: "WriteBack2",
    path: "F:\\",
    status: "Online",
    type: "NTFS",
    fileSystem: "NTFS",
    space: "256 GB",
    freeSpace: "17.4 GB",
    cache: "Auto",
    health: "54%",
    healthStatus: "poor",
  },
];

function Storage() {
  const getHealthColor = (healthStatus) => {
    switch (healthStatus) {
      case "excellent":
        return "bg-green-600 text-green-100";
      case "good":
        return "bg-green-600 text-green-100";
      case "warning":
        return "bg-orange-600 text-orange-100";
      case "poor":
        return "bg-red-600 text-red-100";
      default:
        return "bg-gray-600 text-gray-100";
    }
  };

  const getStatusColor = (status) => {
    return status === "Online" ? "text-green-400" : "text-gray-400";
  };

  const getTypeColor = (type) => {
    return type === "RAID 0"
      ? "bg-purple-600 text-purple-100"
      : "bg-blue-600 text-blue-100";
  };

  return (
    <div className="min-h-screen  text-white p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Storage</h1>
        <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
          <Github size={20} className="text-gray-400" />
        </button>
      </div>

      {/* Storage Table */}
      <div className="backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
        {/* Horizontal scroll wrapper */}
        <div className="overflow-x-auto">
          <div className="min-w-[900px]">
            {/* Table Header */}
            <div className="grid grid-cols-9 gap-4 p-4 border-b border-gray-800 bg-gray-900/50">
              <div className="text-gray-400 text-sm font-medium min-w-[120px]">
                Disk
              </div>
              <div className="text-gray-400 text-sm font-medium min-w-[80px]">
                Status
              </div>
              <div className="text-gray-400 text-sm font-medium min-w-[80px]">
                Type
              </div>
              <div className="text-gray-400 text-sm font-medium min-w-[80px]">
                Type
              </div>
              <div className="text-gray-400 text-sm font-medium min-w-[80px]">
                Space
              </div>
              <div className="text-gray-400 text-sm font-medium min-w-[100px]">
                Free Space
              </div>
              <div className="text-gray-400 text-sm font-medium min-w-[80px]">
                Cache
              </div>
              <div className="text-gray-400 text-sm font-medium min-w-[80px]">
                Health
              </div>
              <div className="text-gray-400 text-sm font-medium min-w-[40px]"></div>
            </div>

            {/* Table Body */}
            {storageData.map((disk) => (
              <div
                key={disk.id}
                className="grid grid-cols-9 gap-4 p-4 border-b border-gray-800 hover:bg-gray-800/20 transition-colors"
              >
                {/* Disk Info */}
                <div className="flex items-center gap-3 min-w-[120px]">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HardDrive size={20} className="text-gray-300" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-white font-medium truncate">
                      {disk.name}
                    </div>
                    <div className="text-gray-400 text-sm truncate">
                      {disk.path}
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center min-w-[80px]">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        disk.status === "Online"
                          ? "bg-green-500"
                          : "bg-gray-500"
                      }`}
                    ></div>
                    <span
                      className={`text-sm font-medium ${getStatusColor(
                        disk.status
                      )}`}
                    >
                      {disk.status}
                    </span>
                  </div>
                </div>

                {/* Type 1 */}
                <div className="flex items-center min-w-[80px]">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getTypeColor(
                      disk.type
                    )}`}
                  >
                    {disk.type}
                  </span>
                </div>

                {/* Type 2 (File System) */}
                <div className="flex items-center min-w-[80px]">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getTypeColor(
                      disk.fileSystem
                    )}`}
                  >
                    {disk.fileSystem}
                  </span>
                </div>

                {/* Space */}
                <div className="flex items-center text-gray-300 min-w-[80px] whitespace-nowrap">
                  {disk.space}
                </div>

                {/* Free Space */}
                <div className="flex items-center text-gray-300 min-w-[100px] whitespace-nowrap">
                  {disk.freeSpace}
                </div>

                {/* Cache */}
                <div className="flex items-center min-w-[80px]">
                  <span className="bg-blue-600 text-blue-100 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                    {disk.cache}
                  </span>
                </div>

                {/* Health */}
                <div className="flex items-center min-w-[80px]">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getHealthColor(
                      disk.healthStatus
                    )}`}
                  >
                    {disk.health}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-center min-w-[40px]">
                  <button className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
                    <MoreVertical size={16} className="text-gray-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Storage;
