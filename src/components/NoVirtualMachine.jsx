import { ChevronDown, Plus, Settings2, Sparkles } from "lucide-react";
import React, { useState } from "react";
import noVirtualMachine from "../assets/NoVirtaulMachine.png";

function NoVirtualMachine() {
  const ICON_COLOR = "text-[rgba(55,58,65,1)]";

  return (
    <div className="min-h-screen text-white p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl font-bold">Virtual Machines</h1>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <button className="flex items-center justify-center gap-2 border border-[#373A41] hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors">
            <div className="w-6 h-6 border border-[#373A41] rounded-full flex items-center justify-center text-[rgba(206,207,210,1)]">
              <Plus size={16} className="text-gray-400" />
            </div>
            <span className="text-[rgba(206,207,210,1)]">Create VM</span>
          </button>

          {/* Status Dropdown */}
        </div>
      </div>

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
              src={noVirtualMachine}
              alt="No machines available"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <h1 className="text-xl font-bold">No virtual Machine found</h1>

        {/* Message */}
        <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
          Create virtual machine to manage image, and updates you can create VM
          for image and updates only.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="create">
            <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors">
              <Plus size={20} />
              Create VM{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NoVirtualMachine;
