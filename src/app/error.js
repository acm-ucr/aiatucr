"use client";

import React from "react";
import Link from "next/link";

const Error = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-6xl font-bold text-red-600 mb-4">
          500 -Internal Server Error
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Something went wrong. Please try refreshing the page or go back to the
          home page:{" "}
        </p>
        <Link
          href="/"
          className="text-lg px-9 py-1 rounded-full bg-ai-blue-400 hover:bg-ai-blue-500 text-white"
        >
          home
        </Link>
      </div>
    </>
  );
};

export default Error;
