import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import Footer from "../components/Layout/Footer";
import { useSearchParams } from "react-router-dom";
import { productData } from "../static/data";

const ProductsPage = () => {
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");

  useEffect(() => {
    console.log("Category Data:", categoryData); // Debugging statement
    if (categoryData === null) {
      const d =
        productData && productData.sort((a, b) => a.total_sell - b.total_sell);
      setData(d);
    } else {
      const d =
        productData &&
        productData.filter((i) => {
          console.log("Product Category:", i.category); // Debugging statement
          return i.category === categoryData;
        });
      setData(d);
    }
  }, [categoryData]);

  return (
    <div className="bg-[#EEEEEE] min-h-screen">
      <Header />
      <br />
      <br />
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-2xl font-bold ">Products</h2>
      </div>

      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No products Found!
          </h1>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
