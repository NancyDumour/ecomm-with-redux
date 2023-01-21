import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Product = () => {
  const products = useSelector((state) => state.productReducer.productList);

  const allMarkup = products.map((product) => {
    return (
      <div className='four wide column' key={product.id}>
        <Link to={`/products/${product.id}`}>
          <div className='ui link cards'>
            <div className='card'>
              <div className='image'>
                <img src={product.image} alt={product.title} />
              </div>
              <div className='content'>
                <div className='header'>{product.title}</div>
                <div className='meta price'>{product.price} $</div>
                <div className='meta'>{product.category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{allMarkup}</>;
};

export default Product;
