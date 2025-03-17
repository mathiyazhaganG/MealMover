import React from 'react';
import ReactDom from 'react-dom/client';
import SearchBar from './SearchBar';
import Restcards from './Restcards';

const Body = () => {
  return (
	<div>
	  <div className="bg-gray-50 min-h-screen pt-4 pb-12">
      <Restcards />
    </div>
	</div>
  )
}

export default Body
