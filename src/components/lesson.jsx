export function Lesson() {
  return (
    <div className=" bg-[#F5F7FA]">
      <div className="flex justify-between container mx-auto px-20 py-3">
        <div className="flex flex-col gap-4 items-start justify-center">
          <p className="font-semibold text-5xl">Lessons and insights </p>
          <p className="text-[#4CAF4F] font-semibold text-5xl">from 8 years</p>
          <p className="text-gray-600 font-normal text-xs">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="text-white rounded-lg py-2 px-4 bg-[#4CAF4F]">
            Register
          </button>
        </div>
        <div className="p-6">
          <img src="Illustration.png" alt="illust" />
        </div>
      </div>
    </div>
  );
}
