const GameCardSkeleton = () => (
  <div className="col-span-4 md:col-span-2 xl:col-span-1 bg-white p-6 rounded-md flex flex-col animate-pulse">
    <div className="h-14 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
    <div className="aspect-video relative bg-gray-200 rounded mb-4"></div>
    <div className="h-9 bg-gray-200 rounded"></div>
  </div>
);

const GameListSkeleton = () => {
  return (
    <div className="m-24 rounded-md grid grid-cols-4 gap-10">
      {[...Array(8)].map((_, index) => (
        <GameCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default GameListSkeleton;
