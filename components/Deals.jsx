import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeitem } from "../utils/cartslice"; // Import removeitem action
import { MENU_URL_IMG, ALT_MENU_URL_IMG } from "../utils/constants";

const Deals = () => {
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux store
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeitem(itemId)); // Dispatch remove action
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-6">
        🛒 Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png"
            alt="Empty Cart"
            className="w-72 mb-4"
          />
          <p className="text-gray-600 text-lg">Your cart is empty! Add something delicious! 🍔🍕</p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col min-h-[400px]"
            >
              <img
                src={item?.imageId ? MENU_URL_IMG + item.imageId : ALT_MENU_URL_IMG}
                alt={item?.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{item?.name}</h3>
                <p className="text-gray-600 text-sm flex-grow">
                  {item?.description || "No description available"}
                </p>
                <div className="flex justify-between items-center mt-3">
                  <p className="text-lg font-semibold text-gray-700">
                    ₹{item?.price / 100 ?? item?.defaultPrice / 100}
                  </p>
                  <p className="text-yellow-500 font-bold text-sm">
                    ⭐ {item?.ratings?.aggregatedRating?.rating} ({item?.ratings?.aggregatedRating?.ratingCount})
                  </p>
                </div>

                {/* Remove Button */}
                <button
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg w-full transition-all duration-200 ease-in-out transform hover:scale-105"
                  onClick={() => handleRemoveItem(item?.id)}
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Deals;
