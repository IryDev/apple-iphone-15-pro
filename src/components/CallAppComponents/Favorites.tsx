export const Favorites = () => {
  return (
    <div className="p-6 px-2">
      <div className="flex justify-between">
        <div />
        <h1 className="text-black">Favorites</h1>
        <button className="relative mr-2">
          <div className="absolute top-1/2 h-[1px] w-3 -translate-y-1/2 bg-blue"></div>
          <div className="absolute top-1/2 h-[1px] w-3 -translate-y-1/2 rotate-90 bg-blue"></div>
        </button>
      </div>

      <div className="flex h-[500px] items-center justify-center">
        <p className="text-lg text-gray">No Favorites</p>
      </div>
    </div>
  );
};
