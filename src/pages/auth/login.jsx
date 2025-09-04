import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    licenseId: "",
    username: "",
    password: "",
    remember: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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

  const handleGoogleSignIn = () => {
    alert(
      "Google Sign-in clicked! This would normally redirect to Google OAuth."
    );
  };

  const handleForgotPassword = () => {
    alert(
      "Forgot password clicked! This would normally open a password reset form."
    );
  };

  const handleGetTrial = () => {
    alert(
      "Get trial clicked! This would normally redirect to the signup page."
    );
  };

  return (
    <div className="relative overflow-hidden">
      {/* Animated background elements */}

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center  p-4">
        <div className="w-full max-w-md">
          {/* Login card */}
          <div className=" p-8 shadow-2xl animate-fadeIn">
            {/* Header */}
            <div className="mb-4">
              <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                Log in
              </h1>
              <p className="text-[rgba(148,151,156,1)] text-base">
                Welcome back! Please enter your details.
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
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full px-2 py-2  border border-white/20 rounded-lg text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:border-white/50 focus:bg-white/15 focus:ring-4 focus:ring-white/10 transition-all duration-300 group-hover:scale-105"
                  placeholder="Enter your username"
                />
              </div>

              {/* Password */}
              <div className="group mb-4">
                <label className="block text-[rgba(206,207,210,1)] text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-2 py-2  border border-white/20 rounded-lg text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:border-white/50 focus:bg-white/15 focus:ring-4 focus:ring-white/10 transition-all duration-300 group-hover:scale-105"
                  placeholder="••••••••"
                />
              </div>

              {/* Options row */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center jsutify-start">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleInputChange}
                    className="w-full px-2 py-2  border border-white/20 rounded-lg text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:border-white/50 focus:bg-white/15 focus:ring-4 focus:ring-white/10 transition-all duration-300 group-hover:scale-105"
                  />
                  <label
                    htmlFor="remember"
                    className="text-[rgba(148,151,156,1)] cursor-pointer select-none"
                  >
                    Remember for 30 days
                  </label>
                </div>
                <button
                  onClick={handleForgotPassword}
                  className="text-[rgba(148,151,156,1)] hover:text-white transition-colors duration-200 underline-offset-4 hover:underline"
                >
                  Forgot password
                </button>
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
                    <span>Signing in...</span>
                  </div>
                ) : (
                  "Sign in"
                )}
              </button>

              {/* Google sign in button */}
              <button
                onClick={handleGoogleSignIn}
                className="w-full py-2 px-6 bg-white/10 border border-white/20 text-white font-medium rounded-lg backdrop-blur-sm hover:bg-white/20 hover:border-white/30 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Sign in with Google</span>
              </button>

              {/* Sign up link */}
              <div className="text-center text-[rgba(148,151,156,1)] text-sm">
                Don't have an account?{" "}
                <button
                  onClick={handleGetTrial}
                  className="text-white font-semibold hover:text-green-400 transition-colors duration-200 underline-offset-4 hover:underline"
                >
                  Get trial
                </button>
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

export default Login;
