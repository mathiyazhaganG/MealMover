import React from 'react';
import ReactDom from 'react-dom/client';

const SearchBar = () => {
  return (
    <div className="max-w-md w-full mx-auto mt-8">
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
      
    </div>
  );
};

const Header = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" className="h-8 w-32 lg:h-12 lg:w-48">
                {/* Main Logo Container */}
                <g>
                  {/* Food Bag Icon */}
                  <path d="M25 10 L40 10 L45 20 L45 45 C45 47.76 42.76 50 40 50 L25 50 C22.24 50 20 47.76 20 45 L20 20 L25 10 Z" fill="#FF6B35" />
                  
                  {/* Bag Handle */}
                  <path d="M25 10 C25 5 30 5 32.5 10 C35 5 40 5 40 10" fill="none" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Fork and Knife */}
                  <path d="M27 20 L27 40" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M38 20 L38 40" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M32.5 20 L32.5 40" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M27 20 L32.5 25" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M38 20 L32.5 25" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Speed Lines */}
                  <path d="M50 25 L55 25" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
                  <path d="M48 32 L58 32" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
                  <path d="M50 39 L55 39" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
                </g>
                
                {/* Text */}
                <text x="65" y="30" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="20" fill="#FF6B35">Meal</text>
                <text x="65" y="48" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="20" fill="#333333">Mover</text>
              </svg>
            </div>

            {/* Navigation Items - Visible on all screen sizes */}
            <div className="flex items-center space-x-2 md:space-x-8">
              <a href="#" className="text-gray-700 hover:text-orange-500 px-1 md:px-3 py-2 text-sm md:text-base font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 px-1 md:px-3 py-2 text-sm md:text-base font-medium">Menu</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 px-1 md:px-3 py-2 text-sm md:text-base font-medium">Deals</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

const Restcards = () => {
  const restaurants = [
    { name: "Tasty Bites", cuisine: "Italian", rating: 4.5, image: "https://imgs.search.brave.com/0Kvfqey1fgPXGSGAv6O6-AzzLJc5gO789nG8A6sbils/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9waXp6YS1uYXBv/bGV0YW5hLXRvbWF0/by1zYXVjZS1tb3p6/YXJlbGxhLWJhc2ls/XzM0MTg2Mi03OS5q/cGc_c2VtdD1haXNf/aHlicmlk" },
    { name: "Spicy Treats", cuisine: "Indian", rating: 4.2, image: "https://imgs.search.brave.com/O8pRPYS0JPZI8MlMWtenj10j9A1iYKmp9W9f4AsSKSk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTAz/NzMwODg5L3Bob3Rv/L2NoaWNrZW4tYmly/eWFuaS0xLTExLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1D/Qm45dlFRcDAtUVJp/UVp1RU1VTmJoTjZC/VmxucmJPQWljU0Vh/WE9Rbl9vPQ" },
    { name: "Sushi World", cuisine: "Japanese", rating: 4.8, image: "https://imgs.search.brave.com/jd_eBeBUitusnZ3PShXrUiOsjlrfXqEOLa7b33klKM0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzM1LzIzLzcx/LzM2MF9GXzEzNTIz/NzE4NF92Wm5OVlJ1/YUhRWmNsWGp4Sjdm/dEVhM0l5ZXJoREYy/eS5qcGc" },
    { name: "Burger Haven", cuisine: "American", rating: 4.3, image: "https://imgs.search.brave.com/GJz-tlWRe7hNDwy0VmQd0dKRBRebxi_8xnQGOZ7u17Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTIw/MjE1MjgxL3Bob3Rv/L2JhY29uLWJ1cmdl/ci5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9b2VOMXpsRFUw/X0NpWFhiU2FIOXVn/emRVcWFVbWFVWFVK/WG1Mbi1wdzRqTT0" }
  ];

  return (
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
  );
};


const Body = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-4 pb-12">
      <SearchBar />
      <Restcards />
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);