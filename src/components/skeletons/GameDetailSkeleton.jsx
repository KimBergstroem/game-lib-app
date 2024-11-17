const GameDetailSkeleton = () => {
  return (
    <div className="container mx-auto p-6 max-w-5xl animate-pulse">
      <div className="h-12 bg-gray-200 rounded w-2/3 mb-6"></div>

      <div className="relative aspect-video mb-8 bg-gray-200 rounded-lg"></div>

      <div className="flex flex-wrap items-center justify-start gap-6 my-6">
        <div className="bg-gray-200 rounded-full h-10 w-32"></div>

        <div className="flex gap-2 flex-wrap">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-full h-8 w-24"
            ></div>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-gray-200 rounded h-8 w-20"></div>
          ))}
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg h-96"></div>
    </div>
  );
};

export default GameDetailSkeleton;
