import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6">
      <div className="max-w-md text-center">
        {/* Big Stylized 404 */}
        <h1 className="text-9xl font-extrabold text-indigo-600 tracking-widest">
          404
        </h1>

        {/* Message Overlay */}
        <div className="bg-indigo-600 px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            Looks like you're lost.
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            The page you are looking for doesn't exist or has been moved. Don't
            worry, even the best explorers get lost sometimes.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="px-8 py-3 text-white bg-indigo-600 rounded-lg font-semibold shadow-lg hover:bg-indigo-700 transition-all active:scale-95"
          >
            Back to Home
          </a>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 text-indigo-600 border border-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-all"
          >
            Go Back
          </button>
        </div>
      </div>

      {/* Optional decorative background element */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-24"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,113.43,121.32,110.33,181.77,93.2,242.22,76.08,300.93,64.21,321.39,56.44Z"
            fill="#4F46E5"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ErrorPage;
