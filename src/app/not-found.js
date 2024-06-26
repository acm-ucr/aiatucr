import Link from "next/link";
{
  /* the Link tag allows navigation between pages by specifying the path to the desired page  */
}
{
  /* this path is relative to the app folder and is one of files in this folder */
}
{
  /* Next.js preloads the linked page in the background making the next page load almost instantly */
}
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* flex makes all of div a flex container. flex-col stacks all the child elements vertically */}
      {/* items-center: centers elements horinontally. justify-center: centers elements vertically  */}
      <h1 className=" leading-none font-mono text-[168px] text-sky-500">
        {" "}
        404{" "}
      </h1>
      {/* leading-none: sets line height to 1 (removes extra space above and below) */}
      <h2 className="text-zinc-950 text-3xl font-mono pb-12">
        {" "}
        page not found!{" "}
      </h2>
      {/* pb-12: adds padding to the bottom of "page not found!" */}
      <Link href="/">
        {" "}
        {/* the href = '/' returns back to the root/home page*/}
        <a className="text-lg px-8 py-2 rounded-full bg-sky-500 hover:bg-sky-700 text-white">
          {" "}
          home{" "}
        </a>
      </Link>
      {/* px-8: adds horizontal padding. py-2: adds vertical padding  */}
      {/* rounded-full: applies rounded corners. hover:bg-sky sets a color when someone hovers over it */}
    </div>
  );
};

export default NotFound;
