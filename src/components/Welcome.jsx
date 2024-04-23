
import useTheme from "../contexts/theme";

const Welcome = ({ onStartClick }) => {
  const { mode, darkTheme, lightTheme } = useTheme();
  return (
    <div
      className={`relative flex flex-col justify-end items-start p-6 w-full mx-auto md:w-[30vw] h-[80vh] text-black dark:text-white border-2 border-black dark:border-[#e6ebeb] dark:bg-[#1e1e23] rounded-3xl bg-[#e6ebeb]`}
    >
      <div
        className="absolute top-5 right-5 ml-auto w-20 h-20 rounded-full border border-black bg-pink-400 flex justify-center items-center"
        onClick={() => {
          if (mode == "light") {
            darkTheme();
          } else {
            lightTheme();
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16"
          fill={`${mode == "light" ? "white" : "black"}`}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
      <div className="flex flex-col justify-between items-start gap-12 my-6">
        <span className="text-3xl lead font-semibold">
          How to play PokéSwipe
        </span>
        <div className="text-xl font-medium flex flex-col justify-start items-start gap-4">
          <p>Pokemon Appear One at a Time.</p>
          <p>Choose &quot;like&quot; or &quot;Dislike&quot;.</p>
          <p>Build your Favorite team.</p>
        </div>
      </div>
      <button
        className="w-full rounded-xl py-4 text-xl font-semibold border-2 border-black dark:border-white bg-green-500 text-black dark:text-white"
        onClick={onStartClick}
      >
        Let&apos;s Go!
      </button>
    </div>
  );
};

export default Welcome;
