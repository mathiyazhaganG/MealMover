import React from 'react';
import ReactDom from 'react-dom/client';

const Header = () => {
  return (
	<div>
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
	</div>
  )
}

export default Header
