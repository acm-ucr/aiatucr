import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className=" leading-none font-mono text-9xl text-ai-blue-500 pb-2">
        404
      </p>
      <p className="text-ai-black text-3xl font-mono pb-10"> page not found!</p>
      <Link
        href="/"
        className="text-lg px-9 py-1 rounded-full bg-ai-blue-400 hover:bg-ai-blue-500 text-white"
      >
        home
      </Link>
    </div>
  );
};

export default NotFound;
