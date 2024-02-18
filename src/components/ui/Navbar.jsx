import { useTheme } from "../../hooks/useTheme";

const Navbar = () => {
  return (
    <header>
      <nav className="mx-2 flex justify-between pt-2">
        <section className="flex flex-row-reverse items-center">
          <div className="text-lg md:text-2xl">Weather Forecast</div>
          <img
            src="/weather-icon-png-2.png"
            alt="company icon"
            width="62px"
            height="62px"
            className=""
          />
        </section>
        <ThemeButton />
      </nav>
    </header>
  );
};
export default Navbar;

const ThemeButton = () => {
  const { theme, setTheme, setSystemTheme } = useTheme();
  return (
    <section className="flex items-center gap-5">
      <button onClick={() => setTheme("dark")}>
        {theme === "dark" ? (
          <img
            src="/theme/dark moon.png"
            alt="sun icon"
            width="40px"
            height="40px"
            className="rounded-full bg-white"
          />
        ) : (
          <img
            src="/theme/light moon.png"
            alt="moon icon"
            width="40px"
            height="40px"
            className="p-0.5"
          />
        )}
      </button>
      <button onClick={() => setTheme("light")}>
        {theme === "light" ? (
          <img
            src="/theme/light bulb.png"
            alt="sun icon"
            width="45px"
            height="45px"
            className="rounded-full bg-white"
          />
        ) : (
          <img
            src="public/theme/dark bulb.png"
            alt="moon icon"
            width="40px"
            height="40px"
            className="rounded-full p-0.5 "
          />
        )}
      </button>
      <button onClick={setSystemTheme}>
        <img
          src="/theme/system.png"
          alt="system icon"
          width="40px"
          height="40px"
        />
      </button>
    </section>
  );
};
