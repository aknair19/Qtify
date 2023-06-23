import Logo from "./logo";
import SearchBar from "./searchBar";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-primary items-center h-16 w-100 p-2 px-6 ">
      <Logo />
      <SearchBar />
      <button className="text-white bg-black outline-none rounded-xl p-2  text-sm font-bold">
        Give Feedback
      </button>
    </nav>
  );
};

export default Navbar;

