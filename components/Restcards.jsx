import React from 'react';
import ReactDom from 'react-dom/client';
import { useState } from 'react';


let restaurantsjs= [
	{ 
		name: "Golden Spoon", 
		cuisine: "French", 
		rating: 4.7, 
		image: "https://images.unsplash.com/photo-1521302080334-4bebac2763fc"
	},
	{ 
		name: "Fiery Grill", 
		cuisine: "Mexican", 
		rating: 4.4, 
		image: "https://images.unsplash.com/photo-1600891964092-4316f1f9a2cf"
	},
	{ 
		name: "Dragon Wok", 
		cuisine: "Chinese", 
		rating: 4.6, 
		image: "https://images.unsplash.com/photo-1553621042-f6e147245754"
	},
	{ 
		name: "Steakhouse Supreme", 
		cuisine: "American", 
		rating: 4.5, 
		image: "https://images.unsplash.com/photo-1554995207-c18c203602cb"
	},
	{ 
		name: "Urban Deli", 
		cuisine: "Mediterranean", 
		rating: 3.9, 
		image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828"
	},
	{ 
		name: "Sushi Zen", 
		cuisine: "Japanese", 
		rating: 4.9, 
		image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
	},
	{ 
		name: "Rustic Eats", 
		cuisine: "European", 
		rating: 3.5, 
		image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
	},
	{ 
		name: "Tandoori Flames", 
		cuisine: "Indian", 
		rating: 4.2, 
		image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f"
	},
	{ 
		name: "Coastal Catch", 
		cuisine: "Seafood", 
		rating: 3.8, 
		image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
	},
	{ 
		name: "Pizza Paradise", 
		cuisine: "Italian", 
		rating: 4.3, 
		image: "https://images.unsplash.com/photo-1548365328-34564c66e69b"
	}
];



const Restcards = () => {
	
	const [restaurants, setRestaurants] = useState(restaurantsjs);
	
	
	 
	
	
	
	
	
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
      <button onClick={() => setRestaurants(restaurants.filter((restaurant) => restaurant.rating >= 4.5))}
          className=" absolute right-2  bg-orange-500 text-white px-4 py-1.5 rounded-full hover:bg-orange-600 transition-colors shadow-sm font-medium mr-45"
        >
          Top Rated Restaurants
        </button>
      
      
    </div>
		<div className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
		  {restaurants.map((restaurant, index) => (
			<div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
			  <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 object-cover" />
			  <div className="p-4">
				<h3 className="text-lg font-semibold text-gray-800">{restaurant.name}</h3>
				<p className="text-gray-600">{restaurant.cuisine}</p>
				<p className="text-orange-500 font-semibold">⭐ {restaurant.rating}</p>
			  </div>
			</div>
		  ))}
		</div>
		</div>
	  )
}

export default Restcards
