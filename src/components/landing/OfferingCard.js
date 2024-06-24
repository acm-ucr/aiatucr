import { FaUserAlt } from "react-icons/fa";

const OfferingCard = ({
  title = "Title",
  description = "Description",
  icon = <FaUserAlt className="size-12" />,
}) => {
  return (
    <div className="h-72 w-64 rounded-3xl p-8 bg-[#AEC6D8] flex flex-col justify-between">
      <h3 className="text-white text-2xl text-center font-semibold">{title}</h3>
      <div className="flex justify-center items-center">{icon}</div>
      <p className="text-center text-[#2E2E2E]">{description}</p>
    </div>
  );
};

export default OfferingCard;
