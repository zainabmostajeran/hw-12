export function TopFoter() {
  return (
    <section className="bg-[#F5F7FA] mt-20 py-9">
      <div className="flex flex-col justify-center items-center gap-6">
        <p className="font-semibold text-4xl">
          Pellentesque suscipit fringilla libero eu.
        </p>
        <div className="inline-flex  items-center gap-1">
          <button className="text-white rounded-lg py-2 px-5 bg-[#4CAF4F] flex items-center justify-center gap-2">
            <p>Get a demo </p>
            <svg
              width="9"
              height="6"
              viewBox="0 0 9 6"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.52582 5.4707L8.24492 3.7516C8.4488 3.54772 8.4488 3.21716 8.24492 3.01328L6.52582 1.29418M8.09201 3.38244L0.435058 3.38244"
                stroke="white"
                stroke-width="0.765676"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
