import Image from "next/image";
import image from "/public/transparent_logo_1.png";
// import { Hubballi } from "next/font/google";

// const hubballi = Hubballi({
//   subsets: ["latin"],
//   weight: ["400"],
// });

const Information = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className="w-1/2 ml-4">
        <Image
          className="object-contain w-full h-auto"
          src={image}
          alt="Logo 1"
        />
      </div>
      <div className="w-7/12 px-4">
        <p
          className={`text-base md:text-xl leading-8 text-left`}
          style={{
            fontSize: "40px",
            lineHeight: "50px",
            textAlign: "center",
            margin: "30px",
          }}
        >
          AI at UCR is the hub for all things Artificial Intelligence. We are
          committed to introducing AI and ML enthusiasts to the wider horizons
          of this evolving field.
        </p>
      </div>
    </div>
  );
};

export default Information;
