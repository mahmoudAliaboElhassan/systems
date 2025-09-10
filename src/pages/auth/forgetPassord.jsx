import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ForgetPassword() {
  const [formData, setFormData] = useState({
    licenseId: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      alert(
        `Login attempted with:\nLicense ID: ${formData.licenseId}\nUsername: ${formData.username}\nRemember me: ${formData.remember}`
      );
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Main content */}
      <div className="relative min-h-screen z-10 flex items-center justify-center  p-4">
        <div className="w-full max-w-md">
          {/* Login card */}
          <div className=" p-8 shadow-2xl animate-fadeIn">
            {/* Header */}
            <div className="mb-4">
              <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                Forget password
              </h1>
              <p className="text-[rgba(148,151,156,1)] text-base">
                forget your admin password? Reset it.
              </p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* License ID */}
              <div className="group mb-4">
                <label className="block text-[rgba(206,207,210,1)] text-sm font-medium mb-2">
                  License ID
                </label>
                <input
                  type="text"
                  name="licenseId"
                  value={formData.licenseId}
                  onChange={handleInputChange}
                  className="w-full px-2 py-2  border border-white/20 rounded-lg text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:border-white/50 focus:bg-white/15 focus:ring-4 focus:ring-white/10 transition-all duration-300 group-hover:scale-105"
                  placeholder="Enter your license"
                />
              </div>

              {/* Username */}
              <div className="group mb-4">
                <label className="block text-[rgba(206,207,210,1)] text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-2 py-2  border border-white/20 rounded-lg text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:border-white/50 focus:bg-white/15 focus:ring-4 focus:ring-white/10 transition-all duration-300 group-hover:scale-105"
                  placeholder="Enter your email"
                />
              </div>

              {/* Sign in button */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full py-2 mb-4 px-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-green-500/25 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Resetting Password...</span>
                  </div>
                ) : (
                  "Reset Password"
                )}
              </button>

              {/* Login */}
              <div className="text-center text-[rgba(148,151,156,1)] text-sm">
                Don't have an account?{" "}
                <Link to="/login">
                  <button className="text-white font-semibold hover:text-green-400 transition-colors duration-200 underline-offset-4 hover:underline">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-6 text-white/60 text-xs">
        © Untitled UI 2077
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}

export default ForgetPassword;
