export function Header() {
  return (
    <div className="flex justify-between items-center gap-6 container mx-auto px-20 py-2">
      <div className="left flex items-center justify-center gap-5">
        <img src="Icon@2x.png" />
        <p className="font-bold text-2xl">Nexcent</p>
      </div>
      <div className="right items-center justify-center flex gap-2">
        <span className="px-3">Home</span>
        <span className="px-3">Features</span>
        <span className="px-3">Community</span>
        <span className="px-3">Blog</span>
        <span className="px-3">Pricing</span>

        <button className="text-white rounded-lg py-2 px-5 bg-[#4CAF4F] flex items-center justify-center gap-2">
          <p> Register Now </p>
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
  );
}
