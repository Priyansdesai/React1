import React from "react";
import "./styles/cart.css";
import Product from "./Product.js";
import ProductData from "./Data";

class Cart extends React.Component {

  render() {
    return (
        <div className="page-content">
        	{this.renderProducts()}
            <h2>Add your products here!</h2>
        </div>
    );
  }

  renderProducts() {
  	return ProductData.products.map(product => {
  		return <Product price={product.cost} name={product.name} limit={product.stock} />;
  	});
  }

}
export default Cart;