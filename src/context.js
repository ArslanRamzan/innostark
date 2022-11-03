import { createContext, useState } from "react";
import LocalStorageHelper from "./LocalStorageHelper";

const ProductListingContext = createContext();

const ProductListingProvider = ProductListingContext.Provider;
const ProductListingConsumer = ProductListingContext.Consumer;


export const ProductContext = (props) => {
  const getInitialState = () => {
    let initialState =  [
      {
        "name": "Apple Watch",
        "description": "Apple watch with Amoled touch",
        "price": "10000",
        "date": "2022-11-15"
      },
      {
        "name": "Note 11",
        "description": "Redmi Note 11",
        "price": "10890",
        "date": "2022-11-15"
      },
      {
        "name": "Redmi Buds 3",
        "description": "Ear friendly buds",
        "price": "8900",
        "date": "2022-11-15"
      },
    ]
    if(LocalStorageHelper.getObject('Items')){
      let addedItemsList = LocalStorageHelper.getObject('Items')
      let productsList = initialState.concat(addedItemsList)
      return [...productsList]
    }
    return initialState
  }
  const [products, setProducts] = useState(getInitialState());

  const addProductItem = (product) => {
    const newProduct = {
      name: product.name,
      description: product.description,
      price: product.price,
      date: product.date
    };
    products.push(newProduct)
    setProducts([...products])
  };

  return (
    <ProductListingProvider
      value={{
        products: products,
        addProductItem: addProductItem,
      }}
    >
      {props.children}
    </ProductListingProvider>
  );
  
}

export { ProductListingContext, ProductListingConsumer };
