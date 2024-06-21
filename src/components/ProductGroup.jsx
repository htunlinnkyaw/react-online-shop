import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import Product from "./Product";
import { productApi } from "../api/product";
import ProductLoader from "./ProductLoader";
import { DataContext } from "../contexts/DataContext";

const ProductGroup = () => {
  // const [products, setProducts] = useState([]);
  const { products, setProducts, filterProducts } = useContext(DataContext);
  const [ready, setReady] = useState(false);

  const filterLogic = filterProducts.length > 0 ? filterProducts : products;

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await productApi.get("/");
      setProducts(res.data);
      setReady(true);
    };
    fetchProduct();
  }, []);

  return (
    <section id="product-section" className="py-3">
      <Container>
        <div
          id="productGroup"
          className="grid gap-4 xl:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 "
        >
          {!ready &&
            Array.from({ length: 6 }, (_, index) => index).map((el, index) => (
              <ProductLoader key={index} />
            ))}
          {filterLogic.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductGroup;
