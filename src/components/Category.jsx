import React from "react";

const Category = ({ categoryName, isSelect, onClick }) => {
  return (
    <button
      onClick={() => onClick(categoryName)}
      className={`active cat-btn border duration-200 active:scale-75 text-nowrap border-gray-700 px-4 py-1 rounded ${
        isSelect && "bg-gray-500 text-white"
      }`}
    >
      {categoryName}
    </button>
  );
};

export default Category;
