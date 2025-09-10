import React from "react";
import { Plus, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";
import NoImgs from "../../../../components/NoImgs";

// Mock data based on the image
const imageData = [
  {
    id: 1,
    name: "Windows 10 22H2",
    path: "I:\\windows10UEFI",
    status: "Active",
    type: "UEFI",
    build: "19712.13",
    lastChanges: "14/07/25",
    size: "13.8 GB",
    update: "Update",
    updateType: "update",
    backup: "ON",
    backupStatus: "on",
    icon: "🪟", // Windows icon
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Windows 11 24H2",
    path: "I:\\windows11UEFI",
    status: "Active",
    type: "UEFI",
    build: "2314.13",
    lastChanges: "14/07/25",
    size: "24.3 GB",
    update: "Updated",
    updateType: "updated",
    backup: "ON",
    backupStatus: "on",
    icon: "🪟", // Windows icon
    color: "bg-blue-500",
  },
  {
    id: 3,
    name: "Redhat 10",
    path: "I:\\RHEL10",
    status: "Active",
    type: "UEFI",
    build: "10.0",
    lastChanges: "01/01/25",
    size: "8.4 GB",
    update: "Updated",
    updateType: "updated",
    backup: "OFF",
    backupStatus: "off",
    icon: "🐧", // Linux icon
    color: "bg-red-500",
  },
];

function Image() {
  if (!imageData && !imageData.length) {
    return <NoImgs />;
  }

  const getStatusColor = (status) => {
    return status === "Active" ? "text-green-400" : "text-gray-400";
  };

  const getTypeColor = (type) => {
    return "bg-blue-600 text-blue-100";
  };

  const getUpdateColor = (updateType) => {
    switch (updateType) {
      case "update":
        return "bg-orange-600 text-orange-100";
      case "updated":
        return "bg-blue-600 text-blue-100";
      default:
        return "bg-gray-600 text-gray-100";
    }
  };

  const getBackupColor = (backupStatus) => {
    return backupStatus === "on"
      ? "bg-green-600 text-green-100"
      : "bg-red-600 text-red-100";
  };

  return (
    <div className="min-h-screen text-white p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl font-bold">Image</h1>

        <Link to="create">
          <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 px-4 py-2 rounded-lg transition-colors">
            <div className="w-6 h-6 border border-gray-600 rounded-full flex items-center justify-center">
              <Plus size={16} className="text-gray-400" />
            </div>
            Create Image
          </button>
        </Link>
      </div>

      {/* Images Table */}
      <div className="backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1200px] table-fixed">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-gray-800 bg-gray-900/50">
                <th className="text-left text-gray-400 text-sm font-medium p-4 w-80">
                  Image
                </th>
                <th className="text-left text-gray-400 text-sm font-medium p-4 w-24">
                  Status
                </th>
                <th className="text-left text-gray-400 text-sm font-medium p-4 w-20">
                  Type
                </th>
                <th className="text-left text-gray-400 text-sm font-medium p-4 w-28">
                  Build
                </th>
                <th className="text-left text-gray-400 text-sm font-medium p-4 w-32">
                  Last Changes
                </th>
                <th className="text-left text-gray-400 text-sm font-medium p-4 w-20">
                  Size
                </th>
                <th className="text-left text-gray-400 text-sm font-medium p-4 w-24">
                  Update
                </th>
                <th className="text-left text-gray-400 text-sm font-medium p-4 w-20">
                  Backup
                </th>
                <th className="text-left text-gray-400 text-sm font-medium p-4 w-12"></th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {imageData.map((image) => (
                <tr
                  key={image.id}
                  className="border-b border-gray-800 hover:bg-gray-800/20 transition-colors"
                >
                  {/* Image Info - Increased width */}
                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 ${image.color} rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}
                      >
                        {image.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-white font-semibold text-base mb-1 truncate">
                          {image.name}
                        </div>
                        <div className="text-gray-400 text-sm truncate">
                          {image.path}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${
                          image.status === "Active"
                            ? "bg-green-500"
                            : "bg-gray-500"
                        }`}
                      ></div>
                      <span
                        className={`text-sm font-medium ${getStatusColor(
                          image.status
                        )}`}
                      >
                        {image.status}
                      </span>
                    </div>
                  </td>

                  {/* Type */}
                  <td className="p-4">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap ${getTypeColor(
                        image.type
                      )}`}
                    >
                      {image.type}
                    </span>
                  </td>

                  {/* Build */}
                  <td className="p-4">
                    <span className="bg-gray-700 text-gray-200 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap">
                      {image.build}
                    </span>
                  </td>

                  {/* Last Changes */}
                  <td className="p-4 text-gray-300 text-sm whitespace-nowrap">
                    {image.lastChanges}
                  </td>

                  {/* Size */}
                  <td className="p-4 text-gray-300 text-sm whitespace-nowrap">
                    {image.size}
                  </td>

                  {/* Update */}
                  <td className="p-4">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap ${getUpdateColor(
                        image.updateType
                      )}`}
                    >
                      {image.update}
                    </span>
                  </td>

                  {/* Backup */}
                  <td className="p-4">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap ${getBackupColor(
                        image.backupStatus
                      )}`}
                    >
                      {image.backup}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="p-4">
                    <button className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors mx-auto">
                      <MoreVertical size={16} className="text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Image;
