import { FiSearch } from 'react-icons/fi';

export default function SearchBar() {
    return (
      <>
        <div className="flex-grow flex justify-center items-center">
          <form className="flex items-center w-full max-w-md bg-white bg-opacity-90 rounded-full shadow-inner px-4 py-2">
            <input
              type="text"
              placeholder="Search for content..."
              className="flex-grow text-gray-700 text-lg bg-transparent outline-none px-2"
            />
            <button
              type="submit"
              className="text-gray-700 px-2 py-2 rounded-full hover:scale-105 transform transition duration-300"
            >
              <FiSearch size={24} />
            </button>
          </form>
        </div>
      </>
    );
  }
  