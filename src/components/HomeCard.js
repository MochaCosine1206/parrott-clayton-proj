const HomeCard = ({
  homeName,
  imageURL,
  startingPrice,
  sqft,
  beds,
  baths,
  isMultiSection,
}) => {
  return (
    <div className="hover:shadow-sm transition transition-duration-200 shadow-md w-full flex flex-col">
      <div
        className="w-full h-44 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `URL(${imageURL})` }}
      ></div>
      <div className="flex flex-col p-5 space-y-2">
        <h1 className="text-2xl">{homeName}</h1>
        <p className="inline text-xs text-gray-400">
          Starting in the ${startingPrice}s
        </p>
        <div className="inline text-xs">
          {sqft} sq. ft {beds} beds {baths} baths{" "}
          {isMultiSection ? "Multi Section" : null}
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
