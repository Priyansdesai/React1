import React from "react";
import "./styles/cart.css";
import Product from "./Product.js";
import ProductData from "./Data";
import Receipt from "./Receipt.jsx";


class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
    this.handleAddToCart = this.handleAddToCart.bind(this)
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this)
  }
  handleAddToCart(productName, price) {
      let a = [...this.state.cartItems];
      let found = false
      if (a.length >= 1) {
        for (let i = 0; i < a.length; i++){
          if (a[i].name === productName) {
            a[i].count += 1
            found = true
          }
        }
      }
      if (found == false) {
        let b = {name: productName, price:price, count:1}
        a = a.concat(b)
      }
      this.setState({
        cartItems: a
      });
    }

  render() {
    return (
        <div className="page-content">
          {this.renderProducts()}
         <Receipt items= {this.state.cartItems} />
        </div>
    );
    }
  
  handleRemoveFromCart (productName){
    let a = [...this.state.cartItems];
    for (let i = 0; i < a.length; i++) {
      if (a[i].name === productName && a[i].count > 1) {
        a[i].count -= 1
      }
      else if (a[i].name === productName && a[i].count == 1) {
          a.splice(i, 1)
      }
    }
    this.setState({
      cartItems: a
    });
  }

  renderProducts() {
  	return ProductData.products.map(product => {
  		return <Product price={product.cost} name={product.name} onAddToCart={this.handleAddToCart} onRemoveFromCart={this.handleRemoveFromCart} />;
  	});
  }
}
export default Cart;