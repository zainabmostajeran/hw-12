export function Manage() {
  return (
    <div className="flex flex-col container mx-auto px-20 py-4 justify-center items-center text-center  text-wrap gap-4">
      <p className="font-bold text-2xl">
        Manage your entire community in a single system
      </p>
      <p className="text-gray-600 font-normal text-xs">
        Who is Nextcent suitable for?
      </p>
      <div className="flex items-center gap-3 justify-between p-3">
        <div className="card1 flex flex-col gap-2 border justify-center items-center py-6 px-3 border-gray-200">
          <img className="w-12 h-10" src="Icon (1).png" />
          <p className="font-bold text-xl">Membership Organisations</p>
          <p className="text-gray-600 font-normal text-xs">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="card2 flex flex-col justify-center items-center  gap-2 border py-6 px-3 border-gray-200">
          <img className="w-12 h-10" src="Icon (2).png" />
          <p className="font-bold text-xl">National Associations</p>
          <p className="text-gray-600 font-normal text-xs">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="card3 flex flex-col justify-center items-center  gap-2 border py-6 px-3 border-gray-200">
        <img className="w-12 h-10" src="Icon (3).png" />
          <p className="font-bold text-xl">Clubs And Groups</p>
          <p className="text-gray-600 font-normal text-xs">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
}
