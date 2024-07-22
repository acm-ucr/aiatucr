"use client";

import Link from "next/link";

const Error = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-9xl font-bold font-mono text-red-600 pb-2">500</p>
        <p className="text-3xl text-gray-700 pb-10">Internal Server Error </p>
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
