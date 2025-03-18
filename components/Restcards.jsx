import React, { useState, useEffect } from "react";
import { IMG_URL } from "../utils/constants";
import ShimmerCard from "./Shimmer";

const Restcards = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.2252841&lng=79.07469569999999&carousel=true&third_party_vendor=1"
      );
      const data = await response.json();
      

      // Extract the restaurants safely from API response
      const fetchedRestaurants =
        data?.data?.cards[4]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants || [];
    

      setRestaurants(fetchedRestaurants);
      setFilteredRestaurants(fetchedRestaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  // Show shimmer if data is not yet loaded
  if (restaurants.length === 0) {
    return (
      <div className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    );
  }

  return (
    <div>
      {/* Search & Filter Section */}
      <div className="max-w-md w-full mx-auto mt-8 flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-grow w-full">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for food, restaurants, cuisines..."
            className="w-full py-3 pl-10 pr-24 bg-white border border-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700"
          />
          <button
            onClick={() =>
              setFilteredRestaurants(
                restaurants.filter((restaurant) =>
					restaurant?.info?.name.toLowerCase().includes(search.toLowerCase()) ||
				restaurant?.info?.cuisines.some((cuisine) =>
				  cuisine.toLowerCase().includes(search.toLowerCase()))
                )
              )
            }
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-4 py-1.5 rounded-full hover:bg-orange-600 transition-colors shadow-sm font-medium"
          >
            Search
          </button>
        </div>

        <button
          onClick={() =>
            setFilteredRestaurants(restaurants.filter((restaurant) => restaurant?.info?.avgRating >= 4.0))
          }
          className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors shadow-sm font-medium w-full sm:w-auto"
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={IMG_URL + restaurant?.info?.cloudinaryImageId}
                alt={restaurant?.info?.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{restaurant?.info?.name}</h3>
                <p className="text-gray-600">{restaurant?.info?.cuisines?.join(", ")}</p>
                <p className="text-orange-500 font-semibold">⭐ {restaurant?.info?.avgRating}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg col-span-full">No restaurants found.</p>
        )}
      </div>
    </div>
  );
};

export default Restcards;
