import React, { useState, useEffect } from "react";
import { ALT_MENU_URL_IMG, MENU_URL, MENU_URL_IMG } from "../utils/constants";
import { useParams } from "react-router";

const Menu = () => {
  const [Head, setHead] = useState({});
  const [Categories, setCategories] = useState([]);
  const { id } = useParams();

  const fetchmenu = async () => {
    const response = await fetch(MENU_URL + id);
    const data = await response.json();
    console.log(data, "res");

    // Extract restaurant info
    const fetchedHead = data?.data?.cards[2]?.card?.card?.info || {};
    setHead(fetchedHead);

    // Extract all categories with items
    const categories =
      data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) || [];

    console.log(categories, "categories");
    setCategories(categories);
  };

  useEffect(() => {
    fetchmenu();
  }, [id]);

  return (
    <div>
      {/* Restaurant Header */}
      <div className="p-4 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-2 tracking-tight hover:text-orange-500 transition-colors duration-300">
          {Head?.name}
        </h3>
        <p className="text-gray-600 text-sm md:text-lg mb-2 italic">
          Cuisines: {Head?.cuisines?.join(", ")}
        </p>
        <div className="w-16 mx-auto border-t-4 border-orange-500 mt-2"></div>
      </div>

      {/* Display All Categories and Items */}
      <div className="max-w-6xl mx-auto py-8 px-4">
        {Categories.map((category, catIndex) => (
          <div key={catIndex} className="mb-10">
            {/* Category Title */}
            <h2 className="text-2xl font-bold text-gray-700 mb-4 border-b-2 border-orange-500 pb-2">
              {category?.card?.card?.title}
            </h2>

            {/* Grid for Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category?.card?.card?.itemCards?.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={
                      item?.card?.info?.imageId
                        ? MENU_URL_IMG + item.card.info.imageId
                        : ALT_MENU_URL_IMG
                    }
                    alt={item?.card?.info?.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item?.card?.info?.name}
                    </h3>
                    <p className="text-gray-600">
                      {item?.card?.info?.description ||
                        "No description available"}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-gray-500 font-semibold">
                        ₹
                        {item?.card?.info?.defaultPrice / 100 ||
                          item?.card?.info?.price / 100}
                      </p>
                      <p className="text-orange-500 font-semibold">
                        ⭐ {item?.card?.info?.ratings?.aggregatedRating?.rating}{" "}
                        ({item?.card?.info?.ratings?.aggregatedRating?.ratingCount})
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
