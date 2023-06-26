import { FaSearch } from 'react-icons/fa';
const SearchBar = () => {
  return (
    <div className="w-3/5  flex justify-center">
      <input
        className="w-96 p-1 h-9 border border-black outline-none placeholder:italic placeholder:text-slate-400 placeholder:text-xs placeholder:px-2  rounded-tl-[5px] rounded-bl-[5px] text-sm  "
        placeholder="search an album of your choice.... "
      />
      <button className="search-button  bg-white border border-black px-2 rounded-tr-[5px] rounded-br-[5px] ">
        <span role="img" className="text-2xl "  aria-label="logo">
        <FaSearch/>
        </span>
      </button>
    </div>
  );
};

export default SearchBar;
