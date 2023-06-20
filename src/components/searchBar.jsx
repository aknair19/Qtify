

const SearchBar = () => {
  return (
    <div className="w-3/5  flex justify-center">
    <input className="w-96 p-1 border border-black outline-none placeholder:italic placeholder:text-slate-400 placeholder:text-sm placeholder:px-2  rounded-tl-lg rounded-bl-lg text-sm " placeholder="search an album of your choice " />
    <button className="search-button  bg-gray-200 border border-black px-2 rounded-tr-lg rounded-br-lg ">
      <span role="img" className="text-lg" aria-label="logo">
        🔍
      </span>
    </button>
  </div>
  )
}

export default SearchBar
