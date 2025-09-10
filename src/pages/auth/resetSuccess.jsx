import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check, ArrowLeft } from "lucide-react";

function ResetSuccess() {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate("/login");
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
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-white stroke-[3]" />
              </div>
            </div>
            <div className="mb-4 text-center">
              <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg text-center">
                Password reset
              </h2>
              <p className="text-[rgba(148,151,156,1)] text-base text-center">
                Your password has been successfully reset.
                <span>click below to login magically .</span>
              </p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              <button
                onClick={() => navigate("/admin-panel")}
                className="w-full py-2 mb-4 px-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-green-500/25 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                Continue
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

export default ResetSuccess;
