const ClientButton = () => {
  return (
    <div>
      <div className="flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-2 shadow-lg ">
        <div className="relative w-8 h-8 z-40">
          <img
            src="/assets/img.svg"
            alt="User Icon"
            className="rounded-full border-2 border-white"
          />
        </div>
        <div className="relative w-8 h-8 -ml-8 z-30">
          <img
            src="/assets/circle-one.svg"
            alt="User Icon"
            className="rounded-full border-2 border-white"
          />
        </div>
        <div className="relative w-8 h-8 -ml-8 z-20">
          <img
            src="/assets/circle-two.svg"
            alt="User Icon"
            className="rounded-full border-2 border-white"
          />
        </div>
        <span className="ml-2 text-[10px] font-300">24+ satisfied clients</span>
      </div>
    </div>
  );
};

export default ClientButton;
