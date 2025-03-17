import React from 'react'
import ReactDom from 'react-dom/client';

const SearchBar = () => {
  return (
	<div>
		 <div className="max-w-md w-full mx-auto mt-8 flex ">
      <div className="relative flex items-center">
        <div className="absolute left-3 text-gray-400">
          {/* Search icon would go here */}
        </div>
     
        <input
          type="text"
          placeholder="Search for food, restaurants, cuisines..."
          className="w-full py-3 pl-10 pr-24 bg-white border border-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700"
        />
        <button
          className="absolute right-2 bg-orange-500 text-white px-4 py-1.5 rounded-full hover:bg-orange-600 transition-colors shadow-sm font-medium"
        >
          Search
        </button>
        
      </div>
      <button
          className=" absolute right-2  bg-orange-500 text-white px-4 py-1.5 rounded-full hover:bg-orange-600 transition-colors shadow-sm font-medium mr-45"
        >
          Top Rated Restaurants
        </button>
      
      
    </div>
  
	  
	</div>
  )
}

export default SearchBar
