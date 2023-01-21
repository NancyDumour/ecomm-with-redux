import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Product from "./Product";
import { allProducts } from "../redux/actions/product-actions";

const AllProducts = () => {
  const products = useSelector((state) => state);

  const dispatch = useDispatch();

  const getAllProducts = async () => {
    const result = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log(error);
      });
    dispatch(allProducts(result.data));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className='ui grid container margin-top-style'>
      <Product />
    </div>
  );
};

export default AllProducts;
