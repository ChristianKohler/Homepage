export const BlogContainer = ({ children }) => {
  return (
    <div className="container w-full md:max-w-3xl mx-auto px-4 md:px-6 text-lg text-gray-800 leading-normal font-sans">
      {children}
    </div>
  );
};
