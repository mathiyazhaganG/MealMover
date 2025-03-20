import React from 'react'
import { ALT_MENU_URL_IMG, MENU_URL,	MENU_URL_IMG} from '../utils/constants'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { useState } from 'react'

const Menu = () => {
	const [Head, setHead] = useState({});
	const [Menu, setMenu] = useState([]);
	const { id } = useParams();
	
	const fetchmenu = async () => {
		const response = await fetch(MENU_URL + id);
		const data = await response.json();
		console.log(data);
		const fetchedhead = data?.data?.cards[2]?.card?.card?.info || {};
		console.log(fetchedhead);
		setHead(fetchedhead);
		const fetchedmenu = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards ||data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7].card?.card?.itemCards || [];
		console.log(fetchedmenu);
		setMenu(fetchedmenu);
		console.log(Menu);
		console.log(Head);



	}
	useEffect(() => {
		fetchmenu();
	}, [id])


	return (
		<div>
			<div className="p-4 text-center">
				{/* Modern Heading */}
				<h3 className="text-3xl font-bold text-gray-800 mb-2 tracking-tight hover:text-orange-500 transition-colors duration-300">
					{Head?.name}
				</h3>

				{/* Cuisine List */}
				<p className="text-gray-600 text-sm md:text-lg mb-2 italic">
					Cusines: {Head?.cuisines?.join(", ")}
				</p>

				{/* Decorative Line */}
				<div className="w-16 mx-auto border-t-4 border-orange-500 mt-2"></div>
			</div>

			{/* Menu Card*/}
			<div className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{Menu.map((item, index) => (
				<div  key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
					<img
						src={item?.card?.info?.imageId ? MENU_URL_IMG + item.card.info.imageId : ALT_MENU_URL_IMG}

						alt="restaurant name"
						className="w-full h-40 object-cover"
					/>
					<div className="p-4">
						<h3 className="text-lg font-semibold text-gray-800">{ item?.card?.info?.name}</h3>
						<p className="text-gray-600">{ item?.card?.info?.description || "No description available"}</p>
						<div className='flex justify-between'>
					    <p className="text-gray-500 font-semibold">Price: ₹{item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}  </p>
						<p className="text-orange-500 font-semibold">⭐{item?.card?.info?.ratings?.aggregatedRating?.rating}-{item?.card?.info?.ratings?.aggregatedRating?.ratingCount} </p>
						</div>
					</div>
				</div>) )}


			</div>
		</div>


	)
}

export default Menu
