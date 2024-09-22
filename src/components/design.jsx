export function Design() {
  return (
    <div className="flex container mx-auto px-20 py-9">
      <div className="left flex flex-col justify-start items-center w-full">
        <img src="pana.png" alt="" />
      </div>
      <div className="right flex flex-col gap-4 justify-start w-full items-start pr-24">
        <p className="font-bold text-xl">
          How to design your site footer like we did{" "}
        </p>
        <p className="text-gray-600 font-normal text-xs">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button className="text-white rounded-lg py-2 px-4 bg-[#4CAF4F]">
          Learn More
        </button>
      </div>
    </div>
  );
}
