const OfferingCard = ({ title, description, icon }) => {
  return (
    <div className="m-8 h-fit w-10/12 lg:w-2/5 xl:w-1/5 rounded-3xl p-8 bg-ai-blue-200 flex flex-col justify-between">
      <h3 className="text-white text-2xl text-center font-semibold">{title}</h3>
      <div className="flex justify-center items-center">{icon}</div>
      <p className="text-center text-ai-gray">{description}</p>
    </div>
  );
};

export default OfferingCard;
