import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className=" leading-none font-mono text-9xl text-sky-500"> 404 </p>
      <p className="text-zinc-950 text-3xl font-mono pb-12">
        {" "}
        page not found!{" "}
      </p>
      <Link href="/">
        {" "}
        <a className="text-lg px-8 py-2 rounded-full bg-sky-500 hover:bg-sky-700 text-white">
          {" "}
          home{" "}
        </a>
      </Link>
    </div>
  );
};

export default NotFound;
