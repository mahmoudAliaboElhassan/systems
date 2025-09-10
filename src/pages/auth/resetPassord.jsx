import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, ArrowLeft } from "lucide-react";

function ResetPassword() {
  const [formData, setFormData] = useState({
    Password: "",
    ConfirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleBackToLogin = () => {
    navigate("/login");
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
    <div className="relative overflow-hidden  min-h-screen">
      {/* Main content */}
      <div className="relative min-h-screen z-10 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Reset Password card */}
          <div className="p-8 shadow-2xl animate-fadeIn">
            {/* Lock Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center">
                <Lock className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="mb-4 text-center">
              <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg text-center">
                Set new password
              </h1>
              <p className="text-[rgba(148,151,156,1)] text-base text-center">
                Your new password should be different to previously used
                passwords.
              </p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* License ID */}
              <div className="group mb-4">
                <label className="block text-[rgba(206,207,210,1)] text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="Password"
                  value={formData.Password}
                  onChange={handleInputChange}
                  className="w-full px-2 py-2  border border-white/20 rounded-lg text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:border-white/50 focus:bg-white/15 focus:ring-4 focus:ring-white/10 transition-all duration-300 group-hover:scale-105"
                  placeholder="••••••••"
                />
              </div>{" "}
              <div className="group mb-4">
                <label className="block text-[rgba(206,207,210,1)] text-sm font-medium mb-2">
                  Confirm password
                </label>
                <input
                  type="password"
                  name="ConfirmPassword"
                  value={formData.ConfirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-2 py-2  border border-white/20 rounded-lg text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:border-white/50 focus:bg-white/15 focus:ring-4 focus:ring-white/10 transition-all duration-300 group-hover:scale-105"
                  placeholder="••••••••"
                />
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-400 text-sm">
                    Must be at least 8 characters
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-400 text-sm">
                    Must contain one special character
                  </span>
                </div>
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
              <button
                onClick={handleBackToLogin}
                className="flex items-center justify-center space-x-2 text-[rgba(148,151,156,1)] text-sm hover:text-white transition-colors duration-200 w-full"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to log in</span>
              </button>
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

export default ResetPassword;
