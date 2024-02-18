const Navbar = () => {
  return (
    <header>
      <nav className="relative ml-2">
        <div className="ml-14 p-4 pt-2 text-lg md:text-2xl">
          Weather Forecast
        </div>
        <img
          src="/weather-icon-png-2.png"
          alt="company icon"
          width="62px"
          height="62px"
          className="absolute top-2"
        />
      </nav>
    </header>
  );
};
export default Navbar;
