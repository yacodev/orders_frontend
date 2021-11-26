import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import MainContainer from "../components/MainContainer";
import ProductCard from "../components/ProductCard";
import { SearchForm } from "../components/SearchForm";

import { getProducts } from "../services/product_fetcher";
import iconCart from "../static/icons/shopping-cart.svg";

const ProductsContainer=styled.div`
  margin-top: 20px;
  background: transparent;
  padding-top: 45px;
  margin-bottom: 35px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 65px;

  overflow-y: scroll;
  -ms-overflow-style: none; 
    scrollbar-width: none;
`;

const TopOptions= styled.div`
  display: flex;
  width: 100%;
  z-index: 999;
  justify-content: space-between;
`;

export const Home = () => {

  const [products, setProducts] =useState([]);
  const [filteredProducts, setFilteredProducts] =useState([]);


  async function fetchData(){
    const fetchedProducts = await getProducts();
    sessionStorage.setItem("products", JSON.stringify(fetchedProducts))
    setProducts(fetchedProducts);
  }

  useEffect(()=> fetchData(), [filteredProducts])

  return (
    <MainContainer>
      <TopOptions>
        <SearchForm products={products} setFilteredProducts={setFilteredProducts} />
        <div>
          <Link to="/cart">
            <img src={iconCart} alt="icon shoping cart"/>
          </Link>
        </div>
      </TopOptions>
      <ProductsContainer>
        {
          filteredProducts.length===0 ?
            (products.map((product)=><ProductCard key={product.id} id={product.id} dish={product.name} picture_url={product.image} price={product.price}></ProductCard>))
          :
          (filteredProducts.map((product)=><ProductCard key={product.id} dish={product.name} picture_url={product.image} price={product.price}></ProductCard>))
          }
      </ProductsContainer>
    </MainContainer>
  );
};
