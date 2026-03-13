import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="max-w-xl text-center p-10">
        <h1 className="text-6xl font-bold text-brand mb-4">404</h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Oops! This page doesn't exist
        </h2>

        <p className="text-gray-600 mb-2">
          The page you're trying to access might have been removed, renamed, or
          is temporarily unavailable.
        </p>

        <p className="text-gray-600 mb-6">
          If you're looking for tax filing, financial services, or reports,
          please navigate back to the homepage.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            Go to Homepage
          </Link>
        </div>

        <p className="text-sm text-gray-400 mt-6">
          Error Code: 404 | Page Not Found
        </p>
      </div>
    </div>
  );
};

export default NotFound;
