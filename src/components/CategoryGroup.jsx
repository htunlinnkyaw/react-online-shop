import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import Category from "./Category";
import { categoryApi } from "../api/category";
import { DataContext } from "../contexts/DataContext";

const CategoryGroup = () => {
  const [categories, setCategory] = useState([]);

  const { products, setFilterProducts } = useContext(DataContext);
  const [ready, setReady] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await categoryApi.get("/");
      setCategory(res.data);
      setReady(true);
    };
    fetchCategory();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      setFilterProducts(products);
    } else {
      const filter = products.filter(
        (product) => product.category === category
      );
      setFilterProducts(filter);
    }
  };

  return (
    <section id="category-section" className="py-3">
      <Container>
        <h4 className="mb-2">Product Categories</h4>
        <div
          id="categoryGroup"
          className="flex gap-2 overflow-x-scroll md:overflow-hidden xl:overflow-hidden lg:overflow-hidden sm:overflow-x-scroll"
        >
          <Category
            categoryName="All"
            isSelect={selectedCategory === "All"}
            onClick={handleCategorySelect}
          />

          {!ready && (
            <div className="flex gap-3 animate-pulse">
              {Array.from({ length: 3 }, (_, index) => index).map(
                (el, index) => (
                  <button
                    key={index}
                    className="border border-neutral-200 px-4 py-1 flex items-center"
                  >
                    <span className="inline-block bg-neutral-200 w-24 h-4" />
                  </button>
                )
              )}
            </div>
          )}

          {categories.map((category, index) => (
            <Category
              key={index}
              categoryName={category}
              isSelect={selectedCategory === category}
              onClick={handleCategorySelect}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategoryGroup;
