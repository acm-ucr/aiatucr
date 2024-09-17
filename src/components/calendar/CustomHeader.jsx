import "./index.css";

const Header = ({ label }) => {
  let roundedClass = "";

  if (label === "Sun") {
    roundedClass = "rounded-tl-lg";
  } else if (label === "Sat") {
    roundedClass = "rounded-tr-lg";
  }

  return (
    <div
      className={`p-3 mt-2 bg-ai-gray font-medium md:text-xl text-white text-left text-xs border-black border-t-2 border-b-2 border-l-2 border-r ${roundedClass} font-montserrat`}
    >
      {label}
    </div>
  );
};

export default Header;
