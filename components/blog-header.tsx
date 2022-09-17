export const BlogHeader = ({
  title,
  description,
  date,
  foldername,
  cover_image,
}) => {
  return (
    <>
      <h1 className="font-bold break-normal text-gray-900 py-2 text-4xl md:text-6xl">
        {title}
      </h1>
      <h2 className="font-normal text-slate-600 mt-0">{description}</h2>
      <p className="text-sm md:text-base font-normal text-gray-600">
        Chris Kohler, {new Date(date).toDateString()}
      </p>
      <img
        alt="hero"
        className="shadow-md rounded-sm"
        src={"/" + foldername + cover_image.replace("./", "/")}
      />
    </>
  );
};
