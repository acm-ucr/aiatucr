import "./index.css";

const Header = ({ label }) => {
  return (
    <div className="pt-2 h-12 w-full font-medium md:text-2xl text-xs border-t-4 border-b-4 border-black">
      {label}
    </div>
  );
};

export default Header;
