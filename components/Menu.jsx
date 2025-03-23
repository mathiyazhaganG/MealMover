import React, { useState, useEffect } from "react";
import { ALT_MENU_URL_IMG, MENU_URL, MENU_URL_IMG } from "../utils/constants";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { additem, removeitem } from "../utils/cartslice"; // Import actions from Redux slice

const Menu = () => {
  const [Head, setHead] = useState({});
  const [Categories, setCategories] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux

  const fetchmenu = async () => {
    try {
      const response = await fetch(MENU_URL + id);
      const data = await response.json();

      setHead(data?.data?.cards[2]?.card?.card?.info || {});
      setCategories(
        data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c.card?.["card"]?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) || []
      );
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  useEffect(() => {
    fetchmenu();
  }, [id]);

  const handleAddItem = (item) => {
    dispatch(additem(item)); // Add to cart
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeitem(itemId)); // Remove from cart
  };

  // Function to check if an item is already in the cart
  const isItemInCart = (itemId) => {
    return cartItems.some((cartItem) => cartItem.id === itemId);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {/* Header Section */}
      <div className="text-center">
        <h3 className="text-4xl font-extrabold text-gray-800 mb-3 hover:text-orange-500 transition-colors duration-300">
          {Head?.name}
        </h3>
        <p className="text-gray-600 text-lg italic">{Head?.cuisines?.join(", ")}</p>
        <div className="w-20 mx-auto border-b-4 border-orange-500 mt-3"></div>
      </div>

      {/* Categories & Menu Items */}
      <div className="max-w-7xl mx-auto py-10">
        {Categories.map((category, catIndex) => (
          <div key={catIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-700 mb-5 border-b-2 border-orange-500 pb-2">
              {category?.card?.card?.title}
            </h2>

            {/* Grid for Menu Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {category?.card?.card?.itemCards?.map((item, index) => {
                const itemId = item?.card?.info?.id;
                const inCart = isItemInCart(itemId);

                return (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col min-h-[400px]"
                  >
                    <img
                      src={
                        item?.card?.info?.imageId
                          ? MENU_URL_IMG + item.card.info.imageId
                          : ALT_MENU_URL_IMG
                      }
                      alt={item?.card?.info?.name}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">
                        {item?.card?.info?.name}
                      </h3>
                      <p className="text-gray-600 text-sm flex-grow">
                        {item?.card?.info?.description || "No description available"}
                      </p>
                      <div className="flex justify-between items-center mt-3">
                        <p className="text-lg font-semibold text-gray-700">
                          ₹
                          {item?.card?.info?.price / 100 ?? item?.card?.info?.defaultPrice / 100}
                        </p>
                        <p className="text-yellow-500 font-bold text-sm">
                          ⭐ {item?.card?.info?.ratings?.aggregatedRating?.rating}{" "}
                          ({item?.card?.info?.ratings?.aggregatedRating?.ratingCount})
                        </p>
                      </div>

                      {/* Add to Cart / Remove Button */}
                      <button
                        className={`mt-4 text-white font-semibold py-2 px-4 rounded-lg w-full transition-all duration-200 ease-in-out transform hover:scale-105 ${
                          inCart ? "bg-red-500 hover:bg-red-600" : "bg-orange-500 hover:bg-orange-600"
                        }`}
                        onClick={() => (inCart ? handleRemoveItem(itemId) : handleAddItem(item?.card?.info))}
                      >
                        {inCart ? "Remove from Cart" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
