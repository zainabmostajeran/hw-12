export function Helping() {
  return (
    <div className=" bg-[#F5F7FA]">
      <div className="flex justify-between container mx-auto px-20 py-3">
        <div className="left flex flex-col gap-y-2 py-6">
          <p className="font-semibold text-2xl">Helping a local</p>
          <p className="font-semibold text-2xl text-[#4CAF4F]">
            business reinvent itself
          </p>
          <p className="font-normal text-xs">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="right flex gap-20 py-6">
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <img src="Icon.svg" alt="" />
              <div className="flex flex-col">
                <p className="font-bold text-xl">2,245,341</p>
                <p className="text-[#717171] font-normal text-xs">Members</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img src="Icon (1).svg" alt="" />
              <div className="flex flex-col">
                <p className="font-bold text-xl">828,867</p>
                <p className="text-[#717171] font-normal text-xs">
                  Event Bookings
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <img src="Icon (2).svg" alt="" />
              <div className="flex flex-col">
                <p className="font-bold text-xl">46,328</p>
                <p className="text-[#717171] font-normal text-xs">Clubs</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img src="Icon (3).svg" alt="" />
              <div className="flex flex-col">
                <p className="font-bold text-xl">1,926,436</p>
                <p className="text-[#717171] font-normal text-xs">Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
