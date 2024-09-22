export function Unseen() {
    return(
        <div className="flex container mx-auto  px-20 py-9">
        <div className="left flex flex-col justify-start items-center w-full">
          <img src="rafiki.png" alt="" />
        </div>
        <div className="right flex flex-col gap-4 justify-start w-full items-start pr-24">
          <p className="font-bold text-xl">
            The unseen of spending three years at Pixelgrade
          </p>
          <p className="text-gray-600 font-normal text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="text-white rounded-lg py-2 px-4 bg-[#4CAF4F]">
            Learn More
          </button>
        </div>
      </div>
    )
}